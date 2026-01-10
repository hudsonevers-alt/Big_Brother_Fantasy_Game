import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase";
import { initPushNotifications } from "./pushNotifications";

const APP_VERSION =
  typeof __APP_VERSION__ === "undefined" ? "0.0.0" : __APP_VERSION__;
const GIT_SHA = typeof __GIT_SHA__ === "undefined" ? "" : __GIT_SHA__;
const BUILD_TIME =
  typeof __BUILD_TIME__ === "undefined" ? "" : __BUILD_TIME__;
const VERSION_LABEL = `v${APP_VERSION}${GIT_SHA ? ` (${GIT_SHA})` : ""}`;

const withTimeout = (promise, ms) => {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Timed out after ${ms}ms`));
    }, ms);
  });
  return Promise.race([promise, timeout]).finally(() => {
    clearTimeout(timeoutId);
  });
};

const logPluginError = (label, error) => {
  console.log(`${label} error details`, {
    name: error?.name,
    code: error?.code,
    message: error?.message,
    cause: error?.cause,
    customData: error?.customData,
    stack: error?.stack
  });
};

const MAX_TRANSFERS = 2;
const STARTING_TRANSFERS = 0;
const ADMIN_EMAIL = "hudsonevers@gmail.com";
const PT_TIME_ZONE = "America/Los_Angeles";
const PROFILE_PROMPT_DELAY_MS = 300;
const CHAT_MESSAGE_LIMIT = 120;

const rosterSlots = [
  { id: "hoh-1", group: "HOH Room", label: "HOH 1" },
  { id: "hoh-2", group: "HOH Room", label: "HOH 2" },
  { id: "hoh-3", group: "HOH Room", label: "HOH 3" },
  { id: "block-1", group: "The Block", label: "Block 1" },
  { id: "block-2", group: "The Block", label: "Block 2" }
];

const rosterGroups = [
  {
    id: "hoh",
    title: "HOH Room",
    description: "Players you want to see succeed.",
    slots: rosterSlots.filter((slot) => slot.group === "HOH Room")
  },
  {
    id: "block",
    title: "The Block",
    description: "Players you are praying to fail.",
    slots: rosterSlots.filter((slot) => slot.group === "The Block")
  }
];
const backupSlotsByGroup = {
  hoh: rosterSlots.filter((slot) => slot.group === "HOH Room"),
  block: rosterSlots.filter((slot) => slot.group === "The Block")
};

const defaultPlayers = [
  {
    id: "alyssa",
    name: "Alyssa Rivers",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "marcus",
    name: "Marcus Cole",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "janelle",
    name: "Janelle Cruz",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "tori",
    name: "Tori James",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "devon",
    name: "Devon Lee",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "camila",
    name: "Camila Ortiz",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "reese",
    name: "Reese Turner",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  },
  {
    id: "carmen",
    name: "Carmen Voss",
    photo: "",
    points: 0,
    isEvicted: false,
    evictedWeekIndex: null
  }
];

const tabs = [
  { id: "chat", label: "Chat" },
  { id: "team", label: "My Team" },
  { id: "boards", label: "Boards" },
  { id: "admin", label: "Admin" }
];
const swipeTabs = ["chat", "team", "boards"];
const SWIPE_TRIGGER_DISTANCE = 80;
const LEADERBOARD_PAGE_SIZE = 50;

const createEmptyTeam = () =>
  rosterSlots.reduce((acc, slot) => {
    acc[slot.id] = "";
    return acc;
  }, {});

const isTeamComplete = (team) =>
  rosterSlots.every((slot) => Boolean(team[slot.id]));

const hasAnyPlayer = (team) =>
  rosterSlots.some((slot) => Boolean(team?.[slot.id]));

const getLockedTeamWeeks = (teams, maxIndex) => {
  if (!Number.isFinite(maxIndex)) {
    return [];
  }
  return Object.keys(teams || {})
    .map((key) => Number(key))
    .filter((index) => Number.isFinite(index) && index <= maxIndex)
    .filter((index) => hasAnyPlayer(teams?.[index]))
    .sort((a, b) => a - b);
};

const getBackupPrefsForWeek = (weekIndex, backupPrefs, backupHistory = {}) => {
  const entry = backupHistory?.[weekIndex];
  if (entry) {
    return {
      hohBackupPlayerId: entry.hohBackupPlayerId || "",
      blockBackupPlayerId: entry.blockBackupPlayerId || ""
    };
  }
  return {
    hohBackupPlayerId: backupPrefs?.hohBackupPlayerId || "",
    blockBackupPlayerId: backupPrefs?.blockBackupPlayerId || ""
  };
};

const getBackupAppliedSlots = (team, resolvedTeam) => {
  const applied = new Set();
  rosterSlots.forEach((slot) => {
    const starterId = team?.[slot.id];
    const resolvedId = resolvedTeam?.[slot.id];
    if (starterId && resolvedId && starterId !== resolvedId) {
      applied.add(slot.id);
    }
  });
  return applied;
};

const normalizePlayers = (list) =>
  (Array.isArray(list) ? list : [])
    .filter((player) => player && player.id && player.name)
    .map((player) => ({
      id: player.id,
      name: player.name,
      photo: player.photo || "",
      points: player.points ?? 0,
      isEvicted: Boolean(player.isEvicted),
      evictedWeekIndex: Number.isFinite(player.evictedWeekIndex)
        ? player.evictedWeekIndex
        : null
    }));

const normalizeAvatars = (list) =>
  (Array.isArray(list) ? list : [])
    .filter((avatar) => avatar && avatar.id && avatar.photo)
    .map((avatar) => ({
      id: avatar.id,
      photo: avatar.photo || ""
    }));

const formatCountdown = (ms) => {
  if (!ms || ms <= 0 || Number.isNaN(ms)) {
    return "00:00:00";
  }
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value) => String(value).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const formatSignedPoints = (value) => `${value > 0 ? "+" : ""}${value} pts`;

const ChevronIcon = ({ direction = "right" }) => (
  <svg
    className={`icon icon-chevron icon-chevron--${direction}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M8 5l8 7-8 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="icon icon-close" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6l-12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

const SwapArrowIcon = () => (
  <svg className="icon icon-swap" viewBox="0 0 40 16" aria-hidden="true">
    <path
      d="M1 8h30m0 0-4-4m4 4-4 4M39 8H9m0 0 4-4m-4 4 4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getTimeZoneParts = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const parts = formatter.formatToParts(date).reduce((acc, part) => {
    if (part.type !== "literal") {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day,
    hour: parts.hour,
    minute: parts.minute,
    second: parts.second
  };
};

const getTimeZoneOffset = (timeZone, date) => {
  const parts = getTimeZoneParts(date, timeZone);
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );
  return asUtc - date.getTime();
};

const formatDeadline = (iso) => {
  if (!iso) {
    return "TBD";
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "TBD";
  }
  const formatted = date.toLocaleString("en-US", {
    timeZone: PT_TIME_ZONE,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
  return `${formatted} PT`;
};

const formatMessageTime = (timestamp) => {
  if (!timestamp?.toDate) {
    return "";
  }
  const date = timestamp.toDate();
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
};

const toPTInputValue = (iso) => {
  if (!iso) {
    return "";
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const parts = getTimeZoneParts(date, PT_TIME_ZONE);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
};

const fromPTInputValue = (value) => {
  if (!value) {
    return "";
  }
  const [datePart, timePart] = value.split("T");
  if (!datePart || !timePart) {
    return "";
  }
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  if (
    !Number.isFinite(year) ||
    !Number.isFinite(month) ||
    !Number.isFinite(day) ||
    !Number.isFinite(hour) ||
    !Number.isFinite(minute)
  ) {
    return "";
  }
  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const offset = getTimeZoneOffset(PT_TIME_ZONE, utcDate);
  return new Date(utcDate.getTime() - offset).toISOString();
};

const buildDefaultWeeks = (count = 5) => {
  const start = new Date();
  start.setDate(start.getDate() + 2);
  return Array.from({ length: count }, (_, index) => {
    const deadline = new Date(start);
    deadline.setDate(start.getDate() + index * 7);
    return {
      id: index + 1,
      name: `Week ${index + 1}`,
      deadline: deadline.toISOString()
    };
  });
};

const createPlayerId = (name) => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${base || "player"}-${Date.now().toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;
};

const countTransfers = (currentTeam, nextTeam) =>
  rosterSlots.reduce(
    (count, slot) =>
      currentTeam[slot.id] !== nextTeam[slot.id] ? count + 1 : count,
    0
  );

const areTeamsEqual = (teamA, teamB) =>
  rosterSlots.every(
    (slot) => (teamA?.[slot.id] || "") === (teamB?.[slot.id] || "")
  );

const normalizeDisplayName = (name) => name.trim();

const isValidDisplayName = (name) =>
  /^[a-z0-9]+$/i.test(name) && name.length <= 20;

const buildDisplayNameLower = (name) => name.toLowerCase();

const normalizeLeagueName = (name) => name.trim();

const isValidLeagueName = (name) => name.length > 0 && name.length <= 24;

const normalizeLeagueCode = (code) => code.trim().toLowerCase();

const LEAGUE_CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const generateLeagueCode = () => {
  let code = "";
  for (let i = 0; i < 6; i += 1) {
    code += LEAGUE_CODE_CHARS[Math.floor(Math.random() * LEAGUE_CODE_CHARS.length)];
  }
  return code;
};

const getInitials = (name) => {
  if (!name) {
    return "?";
  }
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
};

const getEvictedWeekIndex = (player) =>
  Number.isFinite(player?.evictedWeekIndex) ? player.evictedWeekIndex : 0;

const isPlayerEvictedForWeek = (player, weekIndex) =>
  Boolean(player?.isEvicted) && weekIndex >= getEvictedWeekIndex(player);

const isPlayerInactiveForWeek = (player, weekIndex) =>
  Boolean(player?.isEvicted) && weekIndex > getEvictedWeekIndex(player);

const eventOptions = [
  { id: "hohWin", label: "HOH win" },
  { id: "vetoWin", label: "Veto win" },
  { id: "evicted", label: "Evicted" },
  { id: "touchedBlock", label: "Touched block" }
];

const buildRound = (round = {}) => ({
  hohWin: false,
  vetoWin: false,
  evicted: false,
  touchedBlock: false,
  ...round
});

const ensureTwoRounds = (rounds = []) => [buildRound(rounds[0]), buildRound(rounds[1])];

const scoreRound = (round, group) => {
  const touched = round.touchedBlock || round.evicted;
  if (group === "HOH Room") {
    return (
      (round.hohWin ? 5 : 0) +
      (round.vetoWin ? 3 : 0) +
      (round.evicted ? -3 : 0) +
      (touched ? 0 : 2)
    );
  }
  return (
    (round.hohWin ? -3 : 0) +
    (round.vetoWin ? -2 : 0) +
    (round.evicted ? 3 : 0) +
    (touched ? 2 : 0)
  );
};

const getPlayerWeekPoints = (weekEvents, weekIndex, playerId, group) => {
  if (!playerId) {
    return 0;
  }
  const weekData = weekEvents[weekIndex];
  if (!weekData) {
    return 0;
  }
  const rounds = ensureTwoRounds(weekData.players?.[playerId]?.rounds);
  const activeRounds = weekData.doubleEviction ? rounds : rounds.slice(0, 1);
  return activeRounds.reduce((sum, round) => sum + scoreRound(round, group), 0);
};

const getWeekPointsForPlayer = (weekEvents, weekIndex, player, group) => {
  if (!player) {
    return 0;
  }
  if (isPlayerInactiveForWeek(player, weekIndex)) {
    return 0;
  }
  return getPlayerWeekPoints(weekEvents, weekIndex, player.id, group);
};

const buildPlayerBreakdown = (weekEvents, weekIndex, playerId, group) => {
  if (!playerId) {
    return [];
  }
  const weekData = weekEvents[weekIndex];
  if (!weekData) {
    return [];
  }
  const rounds = ensureTwoRounds(weekData.players?.[playerId]?.rounds);
  const activeRounds = weekData.doubleEviction ? rounds : rounds.slice(0, 1);
  const totals = {
    hohWin: 0,
    vetoWin: 0,
    evicted: 0,
    touchedBlock: 0,
    safeWeek: 0,
    touchedCount: 0
  };
  activeRounds.forEach((round) => {
    const touched = round.touchedBlock || round.evicted;
    if (touched) {
      totals.touchedCount += 1;
    }
    if (group === "HOH Room") {
      if (round.hohWin) {
        totals.hohWin += 5;
      }
      if (round.vetoWin) {
        totals.vetoWin += 3;
      }
      if (round.evicted) {
        totals.evicted += -3;
      }
      if (!touched) {
        totals.safeWeek += 2;
      }
      return;
    }
    if (round.hohWin) {
      totals.hohWin += -3;
    }
    if (round.vetoWin) {
      totals.vetoWin += -2;
    }
    if (round.evicted) {
      totals.evicted += 3;
    }
    if (touched) {
      totals.touchedBlock += 2;
    }
  });
  const entries = [];
  if (totals.hohWin) {
    entries.push({ label: "HOH win", points: totals.hohWin });
  }
  if (totals.vetoWin) {
    entries.push({ label: "Veto win", points: totals.vetoWin });
  }
  if (totals.evicted) {
    entries.push({ label: "Evicted", points: totals.evicted });
  }
  if (group === "HOH Room") {
    if (totals.safeWeek) {
      entries.push({ label: "Didn't touch block", points: totals.safeWeek });
    }
    if (totals.touchedCount) {
      entries.push({ label: "Touched block", points: 0 });
    }
  } else if (totals.touchedBlock) {
    entries.push({ label: "Touched block", points: totals.touchedBlock });
  }
  return entries;
};

function App() {
  const emptyTeam = useMemo(() => createEmptyTeam(), []);
  const [activeTab, setActiveTab] = useState("team");
  const [tabTransitionDirection, setTabTransitionDirection] = useState("");
  const [tabTransitionKey, setTabTransitionKey] = useState(0);
  const [players, setPlayers] = useState([]);
  const [avatarOptions, setAvatarOptions] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const [weekEvents, setWeekEvents] = useState({});
  const [currentWeekIndex, setCurrentWeekIndex] = useState(null);
  const [displayedWeekIndex, setDisplayedWeekIndex] = useState(0);
  const [userTeams, setUserTeams] = useState({});
  const [draftTeams, setDraftTeams] = useState({});
  const [transferBank, setTransferBank] = useState(STARTING_TRANSFERS);
  const [transferError, setTransferError] = useState("");
  const [preseasonLocked, setPreseasonLocked] = useState(false);
  const [displayNameDraft, setDisplayNameDraft] = useState("");
  const [displayNameError, setDisplayNameError] = useState("");
  const [profileAvatarDraft, setProfileAvatarDraft] = useState("");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [transferConfirmOpen, setTransferConfirmOpen] = useState(false);
  const [breakdownSelection, setBreakdownSelection] = useState(null);
  const [leaderboardBreakdownSelection, setLeaderboardBreakdownSelection] =
    useState(null);
  const [openSelectSlotId, setOpenSelectSlotId] = useState(null);
  const [backupPanelOpen, setBackupPanelOpen] = useState(null);
  const [backupSelectOpen, setBackupSelectOpen] = useState(null);
  const [leaderboardMode, setLeaderboardMode] = useState("season");
  const [leaderboardWeekIndex, setLeaderboardWeekIndex] = useState(0);
  const [leaderboardScope, setLeaderboardScope] = useState("global");
  const [leaderboardFilterOpen, setLeaderboardFilterOpen] = useState(false);
  const [leaderboardPage, setLeaderboardPage] = useState(1);
  const [leaguePage, setLeaguePage] = useState(1);
  const [leagueManagerOpen, setLeagueManagerOpen] = useState(false);
  const [managedLeagueId, setManagedLeagueId] = useState(null);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [leaderboardViewUserId, setLeaderboardViewUserId] = useState(null);
  const [leaderboardViewWeekIndex, setLeaderboardViewWeekIndex] = useState(0);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);
  const [newLeagueName, setNewLeagueName] = useState("");
  const [joinLeagueCode, setJoinLeagueCode] = useState("");
  const [leagueError, setLeagueError] = useState("");
  const [leagueBusy, setLeagueBusy] = useState(false);
  const [chatScope, setChatScope] = useState("global");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [selectedChatLeagueId, setSelectedChatLeagueId] = useState(null);
  const [chatError, setChatError] = useState("");
  const [chatSending, setChatSending] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userProfileReady, setUserProfileReady] = useState(false);
  const [seasonExists, setSeasonExists] = useState(true);
  const [playersLoaded, setPlayersLoaded] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerPhoto, setNewPlayerPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [newAvatarPhoto, setNewAvatarPhoto] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [now, setNow] = useState(() => new Date());
  const profileInitRef = useRef(false);
  const chatThreadRef = useRef(null);
  const transferErrorTimeoutRef = useRef(null);
  const swipeStartRef = useRef(null);
  const leaderboardFilterRef = useRef(null);
  const playersById = useMemo(
    () => new Map(players.map((player) => [player.id, player])),
    [players]
  );
  const leaderboardUsersById = useMemo(
    () => new Map(leaderboardUsers.map((user) => [user.id, user])),
    [leaderboardUsers]
  );
  const leaderboardViewUser = leaderboardViewUserId
    ? leaderboardUsersById.get(leaderboardViewUserId)
    : null;
  const leaderboardViewWeeks = useMemo(() => {
    if (!leaderboardViewUser || !Number.isFinite(currentWeekIndex)) {
      return [];
    }
    return getLockedTeamWeeks(leaderboardViewUser.teams, currentWeekIndex);
  }, [currentWeekIndex, leaderboardViewUser]);
  const memberLeagues = useMemo(() => {
    if (!authUser) {
      return [];
    }
    const userId = authUser.uid;
    return leagues.filter((league) => {
      const memberIds = Array.isArray(league.memberIds) ? league.memberIds : [];
      return league.ownerId === userId || memberIds.includes(userId);
    });
  }, [authUser, leagues]);
  const ownedLeagues = useMemo(() => {
    if (!authUser) {
      return [];
    }
    const userId = authUser.uid;
    return leagues.filter((league) => league.ownerId === userId);
  }, [authUser, leagues]);
  const managedLeague = useMemo(
    () => ownedLeagues.find((league) => league.id === managedLeagueId) || null,
    [managedLeagueId, ownedLeagues]
  );
  const selectedLeague = useMemo(
    () => leagues.find((league) => league.id === selectedLeagueId) || null,
    [leagues, selectedLeagueId]
  );
  const managedLeagueMembers = useMemo(() => {
    if (!managedLeague) {
      return [];
    }
    const memberIds = Array.isArray(managedLeague.memberIds)
      ? managedLeague.memberIds
      : [];
    return memberIds.map(
      (memberId) =>
        leaderboardUsersById.get(memberId) || {
          id: memberId,
          displayName: "Unknown",
          avatarUrl: "",
          photoURL: ""
        }
    );
  }, [leaderboardUsersById, managedLeague]);
  const sortedPlayers = useMemo(() => {
    const next = [...players];
    next.sort((a, b) => {
      const evictedSort = Number(a.isEvicted) - Number(b.isEvicted);
      if (evictedSort !== 0) {
        return evictedSort;
      }
      return a.name.localeCompare(b.name);
    });
    return next;
  }, [players]);
  const isAdmin = authUser?.email === ADMIN_EMAIL;
  const tabOrder = useMemo(
    () =>
      (isAdmin ? tabs : tabs.filter((tab) => tab.id !== "admin")).map(
        (tab) => tab.id
      ),
    [isAdmin]
  );
  const seasonRef = useMemo(() => doc(db, "season", "state"), []);

  const closeAllModals = useCallback(() => {
    setProfileModalOpen(false);
    setTransferConfirmOpen(false);
    setLeaderboardViewUserId(null);
    setBreakdownSelection(null);
    setLeaderboardBreakdownSelection(null);
    setOpenSelectSlotId(null);
    setBackupPanelOpen(null);
    setBackupSelectOpen(null);
    setLeaderboardFilterOpen(false);
    setLeagueManagerOpen(false);
  }, []);

  const handleTabChange = useCallback(
    (nextTab) => {
      if (nextTab === activeTab) {
        return;
      }
      closeAllModals();
      const currentIndex = tabOrder.indexOf(activeTab);
      const nextIndex = tabOrder.indexOf(nextTab);
      if (currentIndex !== -1 && nextIndex !== -1) {
        setTabTransitionDirection(nextIndex > currentIndex ? "left" : "right");
        setTabTransitionKey((prev) => prev + 1);
      } else {
        setTabTransitionDirection("");
      }
      setActiveTab(nextTab);
    },
    [activeTab, closeAllModals, tabOrder]
  );

  const updateUserDoc = useCallback(
    async (patch) => {
      if (!authUser) {
        return;
      }
      const userRef = doc(db, "users", authUser.uid);
      await setDoc(
        userRef,
        {
          ...patch,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
    },
    [authUser]
  );

  const updateSeasonDoc = useCallback(
    async (patch) => {
      if (!isAdmin) {
        return;
      }
      await setDoc(
        seasonRef,
        {
          ...patch,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
    },
    [isAdmin, seasonRef]
  );

  useEffect(() => {
    void initPushNotifications();
  }, []);

  useEffect(() => {
    if (transferErrorTimeoutRef.current) {
      clearTimeout(transferErrorTimeoutRef.current);
      transferErrorTimeoutRef.current = null;
    }

    if (!transferError) {
      return;
    }

    transferErrorTimeoutRef.current = window.setTimeout(() => {
      setTransferError("");
      transferErrorTimeoutRef.current = null;
    }, 7000);

    return () => {
      if (transferErrorTimeoutRef.current) {
        clearTimeout(transferErrorTimeoutRef.current);
        transferErrorTimeoutRef.current = null;
      }
    };
  }, [transferError]);

  useEffect(() => {
    let alive = true;

    const checkSession = async () => {
      try {
        console.log("checking session start");
        if (Capacitor.isNativePlatform()) {
          const result = await FirebaseAuthentication.getCurrentUser();
          console.log("native current user:", result);
        } else {
          console.log("web mode (skip native current user)");
        }
      } catch (error) {
        console.error("session check failed:", error);
        logPluginError("FirebaseAuthentication.getCurrentUser", error);
        let detail = "Unknown error";
        if (
          error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
        ) {
          detail = error.message;
        } else {
          try {
            detail = JSON.stringify(error, null, 2);
          } catch {
            detail = String(error);
          }
        }
        alert(`SESSION CHECK FAILED:\n\n${detail}`);
      } finally {
        if (alive) {
          setAuthLoading(false);
        }
      }
    };

    void checkSession();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      seasonRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setSeasonExists(false);
          setWeeks([]);
          setWeekEvents({});
          setCurrentWeekIndex(null);
          return;
        }
        setSeasonExists(true);
        const data = snapshot.data() || {};
        setWeeks(Array.isArray(data.weeks) ? data.weeks : []);
        setWeekEvents(data.weekEvents || {});
        setCurrentWeekIndex(
          Number.isFinite(data.currentWeekIndex) ? data.currentWeekIndex : null
        );
      },
      () => {
      }
    );
    return () => unsubscribe();
  }, [seasonRef]);

  useEffect(() => {
    const playersRef = collection(db, "players");
    const playersQuery = query(playersRef, orderBy("name"));
    const unsubscribe = onSnapshot(playersQuery, (snapshot) => {
      const nextPlayers = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setPlayers(normalizePlayers(nextPlayers));
      setPlayersLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const avatarsRef = collection(db, "avatars");
    const avatarsQuery = query(avatarsRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(avatarsQuery, (snapshot) => {
      const nextAvatars = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setAvatarOptions(normalizeAvatars(nextAvatars));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!authUser) {
      setLeaderboardUsers([]);
      return;
    }
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const nextUsers = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setLeaderboardUsers(nextUsers);
    });
    return () => unsubscribe();
  }, [authUser]);

  useEffect(() => {
    if (!authUser) {
      setLeagues([]);
      return;
    }
    const leaguesRef = collection(db, "leagues");
    const unsubscribe = onSnapshot(leaguesRef, (snapshot) => {
      const nextLeagues = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      nextLeagues.sort((a, b) => {
        const aTime = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const bTime = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return aTime - bTime;
      });
      setLeagues(nextLeagues);
    });
    return () => unsubscribe();
  }, [authUser]);

  useEffect(() => {
    if (!authUser) {
      setUserProfile(null);
      setUserProfileReady(false);
      setUserTeams({});
      setDraftTeams({});
      setTransferBank(STARTING_TRANSFERS);
      setPreseasonLocked(false);
      setProfileModalOpen(false);
      setDisplayNameError("");
      setTransferConfirmOpen(false);
      setBreakdownSelection(null);
      setLeaderboardViewUserId(null);
      setSelectedLeagueId(null);
      setLeagueError("");
      setLeagueBusy(false);
      setNewLeagueName("");
      setJoinLeagueCode("");
      setChatMessages([]);
      setChatInput("");
      setChatError("");
      setSelectedChatLeagueId(null);
      setChatScope("global");
      setBackupPanelOpen(null);
      setBackupSelectOpen(null);
      return;
    }
    setUserProfileReady(false);
    const userRef = doc(db, "users", authUser.uid);
    const unsubscribe = onSnapshot(userRef, (snapshot) => {
      if (!snapshot.exists() && snapshot.metadata.fromCache) {
        return;
      }
      if (!snapshot.exists()) {
        const profile = {
          displayName: "",
          displayNameLower: "",
          email: authUser.email || "",
          photoURL: authUser.photoURL || "",
          avatarUrl: "",
          profileComplete: false,
          teams: {},
          transferBank: STARTING_TRANSFERS,
          preseasonLocked: false,
          hasCommittedTeam: false,
          lastSeenWeekIndex: -1,
          hohBackupPlayerId: "",
          blockBackupPlayerId: "",
          backupHistory: {},
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };
        setDoc(userRef, profile, { merge: true }).catch(() => {
          setAuthError("Unable to set up your profile. Please try again.");
        });
        setUserProfile({ id: authUser.uid, ...profile });
        setUserProfileReady(true);
        setUserTeams({});
        setTransferBank(STARTING_TRANSFERS);
        setPreseasonLocked(false);
        return;
      }
      const data = snapshot.data() || {};
      setUserProfile({ id: authUser.uid, ...data });
      setUserProfileReady(
        !snapshot.metadata.fromCache || Boolean(data.displayName)
      );
      setUserTeams(data.teams || {});
      setTransferBank(
        Number.isFinite(data.transferBank) ? data.transferBank : STARTING_TRANSFERS
      );
      setPreseasonLocked(Boolean(data.preseasonLocked));
    });
    return () => unsubscribe();
  }, [authUser]);

  useEffect(() => {
    if (!authUser || !userProfile || !userProfileReady) {
      setDisplayNameDraft("");
      setProfileAvatarDraft("");
      profileInitRef.current = false;
      return;
    }
    const requiresProfileSetup = !userProfile.displayName;
    if (requiresProfileSetup) {
      if (!profileInitRef.current) {
        setDisplayNameDraft(userProfile.displayName || authUser.displayName || "");
        setProfileAvatarDraft(userProfile.avatarUrl || "");
        profileInitRef.current = true;
      }
      const timer = window.setTimeout(() => {
        setProfileModalOpen(true);
      }, PROFILE_PROMPT_DELAY_MS);
      return () => window.clearTimeout(timer);
    }
    profileInitRef.current = false;
  }, [authUser, userProfile, userProfileReady]);

  useEffect(() => {
    if (!authUser) {
      return;
    }
    updateUserDoc({
      email: authUser.email || "",
      photoURL: authUser.photoURL || ""
    }).catch(() => {
      setAuthError("Unable to sync your account details.");
    });
  }, [authUser, updateUserDoc]);

  useEffect(() => {
    if (!authUser || !userProfile?.displayName) {
      return;
    }
    if (!userProfile.displayNameLower) {
      updateUserDoc({
        displayNameLower: buildDisplayNameLower(userProfile.displayName)
      }).catch(() => {
        setAuthError("Unable to sync your display name.");
      });
    }
    if (!userProfile.profileComplete) {
      updateUserDoc({ profileComplete: true }).catch(() => {
        setAuthError("Unable to sync your profile status.");
      });
    }
  }, [authUser, updateUserDoc, userProfile]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      if (!event.target.closest(".player-select")) {
        setOpenSelectSlotId(null);
        setBackupSelectOpen(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!authUser) {
      return;
    }
    if (!playersLoaded) {
      return;
    }
    const playerIds = new Set(players.map((player) => player.id));
    const scrubTeam = (team) =>
      rosterSlots.reduce((acc, slot) => {
        const value = team?.[slot.id];
        acc[slot.id] = playerIds.has(value) ? value : "";
        return acc;
      }, {});
    setUserTeams((prev) => {
      let changed = false;
      const next = {};
      Object.entries(prev || {}).forEach(([key, team]) => {
        const scrubbed = scrubTeam(team);
        next[key] = scrubbed;
        rosterSlots.forEach((slot) => {
          if ((team?.[slot.id] || "") !== scrubbed[slot.id]) {
            changed = true;
          }
        });
      });
      if (!changed) {
        return prev;
      }
      updateUserDoc({ teams: next }).catch(() => {
        setAuthError("Unable to sync your team updates.");
      });
      return next;
    });
    setDraftTeams((prev) => {
      let changed = false;
      const next = {};
      Object.entries(prev || {}).forEach(([key, team]) => {
        const scrubbed = scrubTeam(team);
        next[key] = scrubbed;
        rosterSlots.forEach((slot) => {
          if ((team?.[slot.id] || "") !== scrubbed[slot.id]) {
            changed = true;
          }
        });
      });
      if (!changed) {
        return prev;
      }
      return next;
    });
    const scrubBackup = (value) => (playerIds.has(value) ? value : "");
    const currentHohBackup = userProfile?.hohBackupPlayerId || "";
    const currentBlockBackup = userProfile?.blockBackupPlayerId || "";
    const nextHohBackup = scrubBackup(currentHohBackup);
    const nextBlockBackup = scrubBackup(currentBlockBackup);
    const currentBackupHistory = userProfile?.backupHistory || {};
    let nextBackupHistory = currentBackupHistory;
    let historyChanged = false;
    Object.entries(currentBackupHistory).forEach(([weekKey, entry]) => {
      const nextEntry = {
        hohBackupPlayerId: scrubBackup(entry?.hohBackupPlayerId || ""),
        blockBackupPlayerId: scrubBackup(entry?.blockBackupPlayerId || "")
      };
      const previousEntry = {
        hohBackupPlayerId: entry?.hohBackupPlayerId || "",
        blockBackupPlayerId: entry?.blockBackupPlayerId || ""
      };
      if (
        nextEntry.hohBackupPlayerId !== previousEntry.hohBackupPlayerId ||
        nextEntry.blockBackupPlayerId !== previousEntry.blockBackupPlayerId
      ) {
        if (!historyChanged) {
          nextBackupHistory = { ...currentBackupHistory };
          historyChanged = true;
        }
        nextBackupHistory[weekKey] = nextEntry;
      }
    });
    const backupPatch = {};
    if (
      nextHohBackup !== currentHohBackup ||
      nextBlockBackup !== currentBlockBackup
    ) {
      backupPatch.hohBackupPlayerId = nextHohBackup;
      backupPatch.blockBackupPlayerId = nextBlockBackup;
    }
    if (historyChanged) {
      backupPatch.backupHistory = nextBackupHistory;
    }
    if (Object.keys(backupPatch).length) {
      updateUserDoc(backupPatch).catch(() => {
        setAuthError("Unable to sync your backup player.");
      });
      setUserProfile((prev) => (prev ? { ...prev, ...backupPatch } : prev));
    }
  }, [authUser, players, playersLoaded, updateUserDoc, userProfile]);

  const nextWeekIndex = currentWeekIndex === null ? 0 : currentWeekIndex + 1;
  const nextWeek = weeks[nextWeekIndex] || null;
  const maxViewIndex = nextWeek ? nextWeekIndex : currentWeekIndex ?? 0;
  const isPreseason = currentWeekIndex === null;
  const activeTeam = useMemo(() => {
    if (isPreseason || currentWeekIndex === null) {
      return emptyTeam;
    }
    return userTeams[currentWeekIndex] || emptyTeam;
  }, [currentWeekIndex, emptyTeam, isPreseason, userTeams]);
  const hasActiveTeam = useMemo(
    () => rosterSlots.some((slot) => Boolean(activeTeam[slot.id])),
    [activeTeam]
  );
  const savedNextTeam = useMemo(
    () =>
      userTeams[nextWeekIndex] ||
      (hasActiveTeam ? activeTeam : emptyTeam),
    [activeTeam, emptyTeam, hasActiveTeam, nextWeekIndex, userTeams]
  );
  const draftNextTeam = useMemo(
    () => draftTeams[nextWeekIndex] || savedNextTeam,
    [draftTeams, nextWeekIndex, savedNextTeam]
  );
  const savedWeekIndices = useMemo(
    () =>
      Object.keys(userTeams)
        .map((key) => Number(key))
        .filter((index) => Number.isFinite(index))
        .sort((a, b) => a - b),
    [userTeams]
  );
  const firstSavedWeekIndex = savedWeekIndices.length
    ? savedWeekIndices[0]
    : null;
  const minViewIndex = isPreseason
    ? 0
    : Number.isFinite(firstSavedWeekIndex)
      ? firstSavedWeekIndex
      : nextWeekIndex;

  useEffect(() => {
    setDisplayedWeekIndex((prev) =>
      Math.min(maxViewIndex, Math.max(minViewIndex, prev))
    );
  }, [maxViewIndex, minViewIndex]);

  useEffect(() => {
    if (!isAdmin && activeTab === "admin") {
      handleTabChange("team");
    }
  }, [activeTab, handleTabChange, isAdmin]);

  useEffect(() => {
    if (Number.isFinite(currentWeekIndex)) {
      setLeaderboardWeekIndex(currentWeekIndex);
    }
  }, [currentWeekIndex]);

  useEffect(() => {
    if (!Number.isFinite(currentWeekIndex) && leaderboardMode === "week") {
      setLeaderboardMode("season");
    }
  }, [currentWeekIndex, leaderboardMode]);

  useEffect(() => {
    const maxIndex = Number.isFinite(currentWeekIndex)
      ? currentWeekIndex
      : Math.max(weeks.length - 1, 0);
    setLeaderboardWeekIndex((prev) =>
      Math.min(prev, Math.max(maxIndex, 0))
    );
  }, [currentWeekIndex, weeks.length]);

  useEffect(() => {
    if (!authUser || leaderboardScope !== "leagues") {
      setSelectedLeagueId(null);
      return;
    }
    if (!memberLeagues.length) {
      setSelectedLeagueId(null);
      return;
    }
    if (
      selectedLeagueId &&
      !memberLeagues.some((league) => league.id === selectedLeagueId)
    ) {
      setSelectedLeagueId(null);
    }
  }, [authUser, leaderboardScope, memberLeagues, selectedLeagueId]);

  useEffect(() => {
    setLeagueError("");
  }, [leaderboardScope]);

  useEffect(() => {
    if (!leagueManagerOpen) {
      return;
    }
    if (!ownedLeagues.length) {
      setManagedLeagueId(null);
      return;
    }
    if (!ownedLeagues.some((league) => league.id === managedLeagueId)) {
      setManagedLeagueId(ownedLeagues[0].id);
    }
  }, [leagueManagerOpen, managedLeagueId, ownedLeagues]);

  useEffect(() => {
    setLeaderboardFilterOpen(false);
  }, [leaderboardScope]);

  useEffect(() => {
    setLeaderboardPage(1);
    setLeaguePage(1);
  }, [leaderboardScope]);

  useEffect(() => {
    setLeaderboardPage(1);
  }, [leaderboardMode, leaderboardWeekIndex]);

  useEffect(() => {
    setLeaguePage(1);
  }, [leaderboardMode, leaderboardWeekIndex, selectedLeagueId]);

  useEffect(() => {
    if (chatScope !== "leagues") {
      return;
    }
    if (!memberLeagues.length) {
      setSelectedChatLeagueId(null);
      return;
    }
    if (!memberLeagues.some((league) => league.id === selectedChatLeagueId)) {
      setSelectedChatLeagueId(memberLeagues[0].id);
    }
  }, [chatScope, memberLeagues, selectedChatLeagueId]);

  useEffect(() => {
    setChatError("");
  }, [chatScope]);

  useEffect(() => {
    if (!leaderboardFilterOpen) {
      return;
    }
    const handlePointerDown = (event) => {
      if (
        leaderboardFilterRef.current &&
        !leaderboardFilterRef.current.contains(event.target)
      ) {
        setLeaderboardFilterOpen(false);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [leaderboardFilterOpen]);

  useEffect(() => {
    if (!authUser || !userProfile) {
      return;
    }
    if (!Number.isFinite(currentWeekIndex)) {
      if (userProfile.lastSeenWeekIndex !== -1) {
        updateUserDoc({ lastSeenWeekIndex: -1 }).catch(() => {
          setAuthError("Unable to sync your season status.");
        });
      }
      return;
    }
    const lastSeen = Number.isFinite(userProfile.lastSeenWeekIndex)
      ? userProfile.lastSeenWeekIndex
      : -1;
    if (currentWeekIndex > lastSeen) {
      const delta = currentWeekIndex - lastSeen;
      const nextBank = Math.min(
        MAX_TRANSFERS,
        (Number.isFinite(transferBank) ? transferBank : STARTING_TRANSFERS) + delta
      );
      const patch = {
        transferBank: nextBank,
        lastSeenWeekIndex: currentWeekIndex
      };
      if (preseasonLocked) {
        patch.preseasonLocked = false;
      }
      updateUserDoc(patch).catch(() => {
        setAuthError("Unable to sync your season status.");
      });
    }
  }, [
    authUser,
    currentWeekIndex,
    preseasonLocked,
    transferBank,
    updateUserDoc,
    userProfile
  ]);

  useEffect(() => {
    if (activeTab !== "chat") {
      setChatMessages([]);
      return;
    }
    if (!authUser) {
      setChatMessages([]);
      return;
    }
    setChatError("");
    let messagesRef = null;
    if (chatScope === "global") {
      messagesRef = collection(db, "globalMessages");
    } else if (selectedChatLeagueId) {
      messagesRef = collection(db, "leagues", selectedChatLeagueId, "messages");
    } else {
      setChatMessages([]);
      return;
    }
    const messagesQuery = query(
      messagesRef,
      orderBy("createdAt", "asc"),
      limit(CHAT_MESSAGE_LIMIT)
    );
    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => {
        const nextMessages = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        setChatMessages(nextMessages);
      },
      () => {
        setChatError("Unable to load chat messages.");
      }
    );
    return () => unsubscribe();
  }, [activeTab, authUser, chatScope, selectedChatLeagueId]);

  useEffect(() => {
    if (activeTab !== "chat") {
      return;
    }
    if (!chatThreadRef.current) {
      return;
    }
    if (!chatMessages.length) {
      chatThreadRef.current.scrollTop = 0;
      return;
    }
    chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
  }, [activeTab, chatMessages, chatScope, selectedChatLeagueId]);

  const activeWeekLabel = isPreseason
    ? "Preseason"
    : `Week ${currentWeekIndex + 1}`;
  const deadlineCountdown = nextWeek
    ? formatCountdown(new Date(nextWeek.deadline).getTime() - now.getTime())
    : "--:--:--";
  const deadlineWeekNumber = nextWeek ? nextWeekIndex + 1 : displayedWeekIndex + 1;
  const deadlineTitle = `Gameweek ${deadlineWeekNumber} deadline in`;
  const deadlineLabel = nextWeek ? formatDeadline(nextWeek.deadline) : "Add a week";
  const hasCommittedTeam = Boolean(userProfile?.hasCommittedTeam);
  const isDrafting = Boolean(authUser && !hasCommittedTeam);
  const isUnlimitedTransfers = isPreseason || isDrafting;
  const transferBaseTeam = hasActiveTeam ? activeTeam : savedNextTeam;
  const transfersUsed = isUnlimitedTransfers
    ? 0
    : countTransfers(transferBaseTeam, draftNextTeam);
  const hasDraftChanges = !areTeamsEqual(savedNextTeam, draftNextTeam);
  const transfersRemaining =
    !authUser
      ? "Sign in"
      : isUnlimitedTransfers
        ? "Unlimited"
        : Math.max(0, transferBank - transfersUsed);
  const displayName = authUser
    ? userProfile?.displayName || authUser.displayName || "Player"
    : "Guest";
  const needsDisplayName = Boolean(authUser && userProfile && !userProfile.displayName);
  const profilePhotoUrl = authUser
    ? userProfile?.avatarUrl || authUser.photoURL || ""
    : "";
  const hohBackupPlayerId = userProfile?.hohBackupPlayerId || "";
  const blockBackupPlayerId = userProfile?.blockBackupPlayerId || "";
  const backupHistory = userProfile?.backupHistory || {};
  const activeChatLeague = useMemo(
    () => memberLeagues.find((league) => league.id === selectedChatLeagueId) || null,
    [memberLeagues, selectedChatLeagueId]
  );
  const chatTitle =
    chatScope === "global"
      ? "Global chat"
      : activeChatLeague
        ? `${activeChatLeague.name}`
        : "League chat";
  const isChatDisabled = Boolean(
    !authUser || (chatScope === "leagues" && !activeChatLeague)
  );
  const showProfileModal = Boolean(profileModalOpen);
  const transferSummary = useMemo(() => {
    if (!hasDraftChanges) {
      return [];
    }
    return rosterSlots.reduce((summary, slot) => {
      const fromId = savedNextTeam[slot.id] || "";
      const toId = draftNextTeam[slot.id] || "";
      if (fromId === toId) {
        return summary;
      }
      summary.push({
        slotId: slot.id,
        slotLabel: slot.label,
        groupId: slot.group === "HOH Room" ? "hoh" : "block",
        fromId,
        toId
      });
      return summary;
    }, []);
  }, [draftNextTeam, hasDraftChanges, playersById, savedNextTeam]);
  const canSaveTransfers = Boolean(
    authUser && nextWeek && hasDraftChanges && isTeamComplete(draftNextTeam)
  );
  const visibleTabs = useMemo(
    () => (isAdmin ? tabs : tabs.filter((tab) => tab.id !== "admin")),
    [isAdmin]
  );

  const isTeamLocked = !isPreseason && Boolean(preseasonLocked);
  const isEditable =
    displayedWeekIndex === nextWeekIndex &&
    Boolean(nextWeek) &&
    !isTeamLocked &&
    Boolean(authUser);
  const teamHeaderTitle =
    isPreseason || isDrafting
      ? "Create your team"
      : isEditable
        ? "Pick your team"
        : "Your team";
  const showTeamHeading = isEditable || isPreseason || isDrafting;
  const viewTeam = useMemo(() => {
    if (isPreseason) {
      return draftNextTeam;
    }
    if (isEditable) {
      return draftNextTeam;
    }
    if (displayedWeekIndex === currentWeekIndex) {
      return activeTeam;
    }
    return userTeams[displayedWeekIndex] || emptyTeam;
  }, [
    activeTeam,
    currentWeekIndex,
    displayedWeekIndex,
    emptyTeam,
    isEditable,
    isPreseason,
    draftNextTeam,
    userTeams
  ]);
  const getTeamWithBackups = useCallback(
    (team, weekIndex, backupPrefs) => {
      if (!team) {
        return team;
      }
      const hohBackup = backupPrefs?.hohBackupPlayerId || "";
      const blockBackup = backupPrefs?.blockBackupPlayerId || "";
      if (!hohBackup && !blockBackup) {
        return team;
      }
      const starterIds = new Set(Object.values(team).filter(Boolean));
      const nextTeam = { ...team };
      const applyBackup = (groupId, backupId, otherBackupId) => {
        if (!backupId || backupId === otherBackupId) {
          return;
        }
        if (starterIds.has(backupId)) {
          return;
        }
        const backupPlayer = playersById.get(backupId);
        if (!backupPlayer || isPlayerInactiveForWeek(backupPlayer, weekIndex)) {
          return;
        }
        const slotToFill = backupSlotsByGroup[groupId].find((slot) => {
          const starterId = team?.[slot.id];
          if (!starterId) {
            return false;
          }
          const starterPlayer = playersById.get(starterId);
          return isPlayerInactiveForWeek(starterPlayer, weekIndex);
        });
        if (!slotToFill) {
          return;
        }
        nextTeam[slotToFill.id] = backupId;
      };
      applyBackup("hoh", hohBackup, blockBackup);
      applyBackup("block", blockBackup, hohBackup);
      return nextTeam;
    },
    [playersById]
  );
  const viewBackupPrefs = useMemo(
    () =>
      getBackupPrefsForWeek(
        displayedWeekIndex,
        { hohBackupPlayerId, blockBackupPlayerId },
        backupHistory
      ),
    [backupHistory, blockBackupPlayerId, displayedWeekIndex, hohBackupPlayerId]
  );
  const viewTeamWithBackups = useMemo(
    () => getTeamWithBackups(viewTeam, displayedWeekIndex, viewBackupPrefs),
    [displayedWeekIndex, getTeamWithBackups, viewBackupPrefs, viewTeam]
  );
  const backupAppliedSlots = useMemo(
    () => getBackupAppliedSlots(viewTeam, viewTeamWithBackups),
    [viewTeam, viewTeamWithBackups]
  );

  useEffect(() => {
    if (!isEditable) {
      setOpenSelectSlotId(null);
      setBackupSelectOpen(null);
    }
  }, [isEditable]);

  useEffect(() => {
    setBreakdownSelection(null);
  }, [displayedWeekIndex]);

  useEffect(() => {
    if (!isEditable) {
      setTransferConfirmOpen(false);
    }
  }, [isEditable]);

  const displayedTeamPoints = useMemo(
    () =>
      rosterSlots.reduce((sum, slot) => {
        const playerId = viewTeamWithBackups[slot.id];
        const player = playersById.get(playerId);
        return (
          sum +
          getWeekPointsForPlayer(
            weekEvents,
            displayedWeekIndex,
            player,
            slot.group
          )
        );
      }, 0),
    [displayedWeekIndex, playersById, viewTeamWithBackups, weekEvents]
  );
  const teamMetricValue = isEditable ? transfersRemaining : displayedTeamPoints;
  const teamMetricLabel = isEditable ? "transfers" : "pts";

  const getTeamPointsForWeek = useCallback(
    (team, weekIndex, backupPrefs) => {
      const resolvedTeam = getTeamWithBackups(team, weekIndex, backupPrefs);
      return rosterSlots.reduce((sum, slot) => {
        const playerId = resolvedTeam?.[slot.id];
        const player = playersById.get(playerId);
        return (
          sum +
          getWeekPointsForPlayer(weekEvents, weekIndex, player, slot.group)
        );
      }, 0);
    },
    [getTeamWithBackups, playersById, weekEvents]
  );

  const leaderboardEntries = useMemo(() => {
    if (!leaderboardUsers.length) {
      return [];
    }
    const eligibleUsers = leaderboardUsers.filter((user) => {
      if (user?.hasCommittedTeam) {
        return true;
      }
      const teamKeys = Object.keys(user?.teams || {});
      return teamKeys.length > 0;
    });
    return eligibleUsers
      .map((user) => {
        const teams = user.teams || {};
        const backupPrefs = {
          hohBackupPlayerId: user.hohBackupPlayerId || "",
          blockBackupPlayerId: user.blockBackupPlayerId || ""
        };
        const backupHistory = user.backupHistory || {};
        const seasonTotal = weeks.reduce(
          (sum, _week, index) =>
            sum +
            getTeamPointsForWeek(
              teams[index] || emptyTeam,
              index,
              getBackupPrefsForWeek(index, backupPrefs, backupHistory)
            ),
          0
        );
        const weekPoints = getTeamPointsForWeek(
          teams[leaderboardWeekIndex] || emptyTeam,
          leaderboardWeekIndex,
          getBackupPrefsForWeek(leaderboardWeekIndex, backupPrefs, backupHistory)
        );
        const points = leaderboardMode === "season" ? seasonTotal : weekPoints;
        return {
          id: user.id,
          name: user.displayName || "Player",
          photoURL: user.avatarUrl || user.photoURL || "",
          points,
          seasonTotal,
          weekPoints
        };
      })
      .sort((a, b) => b.points - a.points);
  }, [
    emptyTeam,
    getTeamPointsForWeek,
    leaderboardMode,
    leaderboardUsers,
    leaderboardWeekIndex,
    weeks
  ]);
  const leagueEntries = useMemo(() => {
    if (!selectedLeague) {
      return [];
    }
    const memberIds = Array.isArray(selectedLeague.memberIds)
      ? selectedLeague.memberIds
      : [];
    const members = leaderboardUsers.filter((user) => memberIds.includes(user.id));
    const eligibleMembers = members.filter((user) => {
      if (user?.hasCommittedTeam) {
        return true;
      }
      const teamKeys = Object.keys(user?.teams || {});
      return teamKeys.length > 0;
    });
    return eligibleMembers
      .map((user) => {
        const teams = user.teams || {};
        const backupPrefs = {
          hohBackupPlayerId: user.hohBackupPlayerId || "",
          blockBackupPlayerId: user.blockBackupPlayerId || ""
        };
        const backupHistory = user.backupHistory || {};
        const seasonTotal = weeks.reduce(
          (sum, _week, index) =>
            sum +
            getTeamPointsForWeek(
              teams[index] || emptyTeam,
              index,
              getBackupPrefsForWeek(index, backupPrefs, backupHistory)
            ),
          0
        );
        const weekPoints = getTeamPointsForWeek(
          teams[leaderboardWeekIndex] || emptyTeam,
          leaderboardWeekIndex,
          getBackupPrefsForWeek(leaderboardWeekIndex, backupPrefs, backupHistory)
        );
        const points = leaderboardMode === "season" ? seasonTotal : weekPoints;
        return {
          id: user.id,
          name: user.displayName || "Player",
          photoURL: user.avatarUrl || user.photoURL || "",
          points
        };
      })
      .sort((a, b) => b.points - a.points);
  }, [
    emptyTeam,
    getTeamPointsForWeek,
    leaderboardMode,
    leaderboardUsers,
    leaderboardWeekIndex,
    selectedLeague,
    weeks
  ]);
  const leaderboardUserRankLabel = useMemo(() => {
    if (!authUser) {
      return "";
    }
    const index = leaderboardEntries.findIndex(
      (entry) => entry.id === authUser.uid
    );
    return index === -1 ? "--" : `#${index + 1}`;
  }, [authUser, leaderboardEntries]);
  const leaderboardPageCount = Math.max(
    1,
    Math.ceil(leaderboardEntries.length / LEADERBOARD_PAGE_SIZE)
  );
  const leaguePageCount = Math.max(
    1,
    Math.ceil(leagueEntries.length / LEADERBOARD_PAGE_SIZE)
  );
  const leaderboardPageStart = (leaderboardPage - 1) * LEADERBOARD_PAGE_SIZE;
  const leaguePageStart = (leaguePage - 1) * LEADERBOARD_PAGE_SIZE;
  const leaderboardPageEntries = leaderboardEntries.slice(
    leaderboardPageStart,
    leaderboardPageStart + LEADERBOARD_PAGE_SIZE
  );
  const leaguePageEntries = leagueEntries.slice(
    leaguePageStart,
    leaguePageStart + LEADERBOARD_PAGE_SIZE
  );
  const leaderboardFilterOptions = useMemo(() => {
    const options = [{ label: "total", mode: "season" }];
    if (!Number.isFinite(currentWeekIndex)) {
      return options;
    }
    for (let index = currentWeekIndex; index >= 0; index -= 1) {
      const label = weeks[index]?.name || `Week ${index + 1}`;
      options.push({
        label,
        mode: "week",
        weekIndex: index
      });
    }
    return options;
  }, [currentWeekIndex, weeks]);
  const leaderboardFilterWeekLabel = Number.isFinite(leaderboardWeekIndex)
    ? weeks[leaderboardWeekIndex]?.name ||
      `Week ${leaderboardWeekIndex + 1}`
    : "";
  const leaderboardFilterLabel =
    leaderboardMode === "season"
      ? "total"
      : leaderboardFilterWeekLabel || "total";
  const leaderboardEntryLabel =
    leaderboardMode === "season" ? "Total" : leaderboardFilterWeekLabel;
  useEffect(() => {
    setLeaderboardPage((prev) => Math.min(prev, leaderboardPageCount));
  }, [leaderboardPageCount]);

  useEffect(() => {
    setLeaguePage((prev) => Math.min(prev, leaguePageCount));
  }, [leaguePageCount]);
  const leaderboardViewTeam = leaderboardViewUser
    ? leaderboardViewUser.teams?.[leaderboardViewWeekIndex] || emptyTeam
    : emptyTeam;
  const leaderboardViewBackupHistory = leaderboardViewUser?.backupHistory || {};
  const leaderboardViewBackupPrefs = useMemo(
    () =>
      getBackupPrefsForWeek(
        leaderboardViewWeekIndex,
        {
          hohBackupPlayerId: leaderboardViewUser?.hohBackupPlayerId || "",
          blockBackupPlayerId: leaderboardViewUser?.blockBackupPlayerId || ""
        },
        leaderboardViewBackupHistory
      ),
    [leaderboardViewBackupHistory, leaderboardViewUser, leaderboardViewWeekIndex]
  );
  const leaderboardViewTeamWithBackups = useMemo(
    () =>
      getTeamWithBackups(
        leaderboardViewTeam,
        leaderboardViewWeekIndex,
        leaderboardViewBackupPrefs
      ),
    [
      getTeamWithBackups,
      leaderboardViewBackupPrefs,
      leaderboardViewTeam,
      leaderboardViewWeekIndex
    ]
  );
  const leaderboardViewBackupAppliedSlots = useMemo(
    () =>
      getBackupAppliedSlots(
        leaderboardViewTeam,
        leaderboardViewTeamWithBackups
      ),
    [leaderboardViewTeam, leaderboardViewTeamWithBackups]
  );
  const leaderboardViewWeekPoints = useMemo(
    () =>
      getTeamPointsForWeek(
        leaderboardViewTeam,
        leaderboardViewWeekIndex,
        leaderboardViewBackupPrefs
      ),
    [
      getTeamPointsForWeek,
      leaderboardViewBackupPrefs,
      leaderboardViewTeam,
      leaderboardViewWeekIndex
    ]
  );
  const leaderboardViewWeekPosition = leaderboardViewWeeks.indexOf(
    leaderboardViewWeekIndex
  );
  const leaderboardViewWeekLabel = leaderboardViewWeeks.length
    ? weeks[leaderboardViewWeekIndex]?.name ||
      `Week ${leaderboardViewWeekIndex + 1}`
    : "No locked weeks";
  const isLeagueOwner = Boolean(
    authUser && selectedLeague && selectedLeague.ownerId === authUser.uid
  );
  const isManagedLeagueOwner = Boolean(
    authUser && managedLeague && managedLeague.ownerId === authUser.uid
  );
  const isModalOpen =
    profileModalOpen ||
    transferConfirmOpen ||
    Boolean(leaderboardViewUserId) ||
    Boolean(breakdownSelection) ||
    Boolean(leaderboardBreakdownSelection) ||
    leagueManagerOpen ||
    leaderboardFilterOpen;

  const handleTouchStart = useCallback(
    (event) => {
      if (isModalOpen || !swipeTabs.includes(activeTab)) {
        swipeStartRef.current = null;
        return;
      }
      if (event.touches.length !== 1) {
        swipeStartRef.current = null;
        return;
      }
      const touch = event.touches[0];
      swipeStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    },
    [activeTab, isModalOpen]
  );

  const handleTouchEnd = useCallback(
    (event) => {
      if (isModalOpen || !swipeTabs.includes(activeTab)) {
        swipeStartRef.current = null;
        return;
      }
      const start = swipeStartRef.current;
      swipeStartRef.current = null;
      if (!start || event.changedTouches.length !== 1) {
        return;
      }
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const elapsed = Date.now() - start.time;
      if (elapsed > 800) {
        return;
      }
      if (
        Math.abs(deltaX) < SWIPE_TRIGGER_DISTANCE ||
        Math.abs(deltaX) < Math.abs(deltaY) * 1.2
      ) {
        return;
      }
      const currentIndex = swipeTabs.indexOf(activeTab);
      if (currentIndex === -1) {
        return;
      }
      if (deltaX < 0 && currentIndex < swipeTabs.length - 1) {
        handleTabChange(swipeTabs[currentIndex + 1]);
      } else if (deltaX > 0 && currentIndex > 0) {
        handleTabChange(swipeTabs[currentIndex - 1]);
      }
    },
    [activeTab, handleTabChange, isModalOpen]
  );

  useEffect(() => {
    if (!leaderboardViewUser) {
      return;
    }
    if (!leaderboardViewWeeks.length) {
      setLeaderboardViewWeekIndex(0);
      return;
    }
    if (!leaderboardViewWeeks.includes(leaderboardViewWeekIndex)) {
      setLeaderboardViewWeekIndex(
        leaderboardViewWeeks[leaderboardViewWeeks.length - 1]
      );
    }
  }, [leaderboardViewUser, leaderboardViewWeekIndex, leaderboardViewWeeks]);

  useEffect(() => {
    setLeaderboardBreakdownSelection(null);
  }, [leaderboardViewUserId, leaderboardViewWeekIndex]);

  const advanceWeek = useCallback(async () => {
    if (!nextWeek || !isAdmin) {
      return;
    }
    setTransferError("");
    setDisplayedWeekIndex(nextWeekIndex);
    try {
      const batch = writeBatch(db);
      batch.set(
        seasonRef,
        {
          currentWeekIndex: nextWeekIndex,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
      if (Number.isFinite(currentWeekIndex)) {
        const usersSnapshot = await getDocs(collection(db, "users"));
        usersSnapshot.forEach((docSnap) => {
          const data = docSnap.data() || {};
          const teams = data.teams || {};
          const currentTeam = teams[currentWeekIndex];
          const nextTeam = teams[nextWeekIndex];
          const backupHistory = data.backupHistory || {};
          const hasBackupEntry = Boolean(backupHistory?.[nextWeekIndex]);
          const nextBackupEntry = {
            hohBackupPlayerId: data.hohBackupPlayerId || "",
            blockBackupPlayerId: data.blockBackupPlayerId || ""
          };
          const patch = {};
          if (hasAnyPlayer(currentTeam) && !hasAnyPlayer(nextTeam)) {
            patch.teams = {
              ...teams,
              [nextWeekIndex]: currentTeam
            };
          }
          if (!hasBackupEntry) {
            patch.backupHistory = {
              ...backupHistory,
              [nextWeekIndex]: nextBackupEntry
            };
          }
          if (Object.keys(patch).length) {
            batch.set(
              doc(db, "users", docSnap.id),
              {
                ...patch,
                updatedAt: serverTimestamp()
              },
              { merge: true }
            );
          }
        });
      }
      await batch.commit();
    } catch (error) {
      setAuthError("Unable to advance the week. Please try again.");
    }
  }, [currentWeekIndex, isAdmin, nextWeek, nextWeekIndex, seasonRef]);

  useEffect(() => {
    if (!nextWeek || !isAdmin) {
      return;
    }
    const deadline = new Date(nextWeek.deadline);
    if (Number.isNaN(deadline.getTime())) {
      return;
    }
    if (now >= deadline && currentWeekIndex !== nextWeekIndex) {
      advanceWeek();
    }
  }, [advanceWeek, currentWeekIndex, isAdmin, nextWeek, nextWeekIndex, now]);

  const handleTeamChange = (slotId, playerId) => {
    if (!isEditable || !nextWeek || !authUser) {
      return;
    }
    setTransferError("");
    setDraftTeams((prev) => {
      const currentDraft = prev[nextWeekIndex] || savedNextTeam;
      const updated = { ...currentDraft, [slotId]: playerId };
      if (!isUnlimitedTransfers) {
        const used = countTransfers(transferBaseTeam, updated);
        if (used > transferBank) {
          setTransferError("No transfers left. Undo a move to make another change.");
          return prev;
        }
      }
      return { ...prev, [nextWeekIndex]: updated };
    });
  };

  const handleRemoveFromSlot = (slotId) => {
    handleTeamChange(slotId, "");
  };

  const handleBackupChange = (groupId, playerId) => {
    if (!isEditable || !authUser) {
      return;
    }
    const previousBackupPrefs = {
      hohBackupPlayerId,
      blockBackupPlayerId
    };
    const otherBackup =
      groupId === "hoh" ? blockBackupPlayerId : hohBackupPlayerId;
    if (playerId && playerId === otherBackup) {
      return;
    }
    if (playerId) {
      const starterIds = new Set(Object.values(draftNextTeam).filter(Boolean));
      if (starterIds.has(playerId)) {
        return;
      }
    }
    const patch =
      groupId === "hoh"
        ? { hohBackupPlayerId: playerId }
        : { blockBackupPlayerId: playerId };
    let nextBackupHistory = userProfile?.backupHistory || {};
    let historyChanged = false;
    if (Number.isFinite(currentWeekIndex)) {
      const lockedWeeks = getLockedTeamWeeks(userTeams, currentWeekIndex);
      lockedWeeks.forEach((week) => {
        if (!nextBackupHistory?.[week]) {
          if (!historyChanged) {
            nextBackupHistory = { ...nextBackupHistory };
            historyChanged = true;
          }
          nextBackupHistory[week] = previousBackupPrefs;
        }
      });
    }
    const nextPatch = historyChanged
      ? { ...patch, backupHistory: nextBackupHistory }
      : patch;
    setUserProfile((prev) => (prev ? { ...prev, ...nextPatch } : prev));
    updateUserDoc(nextPatch).catch(() => {
      setAuthError("Unable to update backup player.");
    });
  };

  const handleToggleBackupPanel = (groupId) => {
    setBackupPanelOpen((prev) => (prev === groupId ? null : groupId));
    setBackupSelectOpen(null);
  };

  const handleToggleBackupSelect = (groupId) => {
    if (!isEditable) {
      return;
    }
    setBackupSelectOpen((prev) => (prev === groupId ? null : groupId));
    setOpenSelectSlotId(null);
  };

  const handleResetDraft = () => {
    setTransferError("");
    setDraftTeams((prev) => {
      if (!prev[nextWeekIndex]) {
        return prev;
      }
      const next = { ...prev };
      delete next[nextWeekIndex];
      return next;
    });
  };

  const handleOpenTransferConfirm = () => {
    if (!isEditable || !authUser || !nextWeek) {
      return;
    }
    setTransferConfirmOpen(true);
  };

  const handleConfirmTransfers = async () => {
    if (!authUser || !nextWeek || !canSaveTransfers) {
      return;
    }
    const updated = { ...draftNextTeam };
    const nextTeams = { ...userTeams, [nextWeekIndex]: updated };
    const nextBackupHistory = {
      ...backupHistory,
      [nextWeekIndex]: {
        hohBackupPlayerId,
        blockBackupPlayerId
      }
    };
    try {
      await updateUserDoc({ teams: nextTeams, backupHistory: nextBackupHistory });
      setUserTeams(nextTeams);
      setUserProfile((prev) =>
        prev ? { ...prev, backupHistory: nextBackupHistory } : prev
      );
      setDraftTeams((prev) => {
        if (!prev[nextWeekIndex]) {
          return prev;
        }
        const next = { ...prev };
        delete next[nextWeekIndex];
        return next;
      });
      setTransferConfirmOpen(false);
      setTransferError("");
    } catch (error) {
      setAuthError("Unable to save your transfers. Please try again.");
    }
  };

  const handlePreseasonSave = () => {
    if (!nextWeek || !isTeamComplete(draftNextTeam) || !authUser) {
      return;
    }
    const nextTeams = { ...userTeams, [nextWeekIndex]: draftNextTeam };
    const nextBackupHistory = {
      ...backupHistory,
      [nextWeekIndex]: {
        hohBackupPlayerId,
        blockBackupPlayerId
      }
    };
    const patch = {
      teams: nextTeams,
      hasCommittedTeam: true,
      preseasonLocked: false,
      backupHistory: nextBackupHistory
    };
    updateUserDoc(patch).catch(() => {
      setAuthError("Unable to save your team.");
    });
    setUserTeams(nextTeams);
    setUserProfile((prev) =>
      prev ? { ...prev, backupHistory: nextBackupHistory } : prev
    );
    setPreseasonLocked(false);
    setDraftTeams((prev) => {
      if (!prev[nextWeekIndex]) {
        return prev;
      }
      const next = { ...prev };
      delete next[nextWeekIndex];
      return next;
    });
  };

  const handleSaveProfile = async () => {
    if (!authUser) {
      return;
    }
    const trimmed = normalizeDisplayName(displayNameDraft);
    if (!trimmed) {
      setDisplayNameError("Enter a nickname to continue.");
      return;
    }
    if (!isValidDisplayName(trimmed)) {
      setDisplayNameError("Use only letters or numbers (max 20 characters).");
      return;
    }
    const normalized = buildDisplayNameLower(trimmed);
    try {
      const usersRef = collection(db, "users");
      const nameQuery = query(
        usersRef,
        where("displayNameLower", "==", normalized),
        limit(1)
      );
      const snapshot = await getDocs(nameQuery);
      if (!snapshot.empty && snapshot.docs[0].id !== authUser.uid) {
        setDisplayNameError("That nickname is already taken.");
        return;
      }
      await updateUserDoc({
        displayName: trimmed,
        displayNameLower: normalized,
        avatarUrl: profileAvatarDraft || "",
        profileComplete: true
      });
      setDisplayNameError("");
      setProfileModalOpen(false);
    } catch (error) {
      setAuthError("Unable to save your profile.");
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError("");
    let innerAlerted = false;
    const getErrorDetail = (error) => {
      if (error && typeof error === "object") {
        const code =
          "code" in error && typeof error.code === "string" ? error.code : "";
        const message =
          "message" in error && typeof error.message === "string"
            ? error.message
            : "";
        if (code || message) {
          return code ? `${code}: ${message || "Unknown error"}` : message;
        }
      }
      try {
        return JSON.stringify(error, null, 2);
      } catch {
        return String(error);
      }
    };
    const isNative = Capacitor.isNativePlatform();
    try {
      if (isNative) {
        console.log("starting native google sign-in");
        const result = await FirebaseAuthentication.signInWithGoogle();
        console.log("native result summary:", {
          hasCredential: Boolean(result?.credential),
          providerId: result?.credential?.providerId ?? "unknown"
        });
        const idToken =
          result?.credential?.idToken ??
          result?.credential?.id_token ??
          result?.authentication?.idToken ??
          result?.idToken ??
          null;
        const accessToken =
          result?.credential?.accessToken ??
          result?.credential?.access_token ??
          result?.authentication?.accessToken ??
          result?.accessToken ??
          null;
        console.log("extracted tokens:", {
          hasIdToken: Boolean(idToken),
          hasAccessToken: Boolean(accessToken)
        });
        console.log("token lengths:", {
          idTokenLength: idToken?.length ?? 0,
          accessTokenLength: accessToken?.length ?? 0
        });
        if (!accessToken && !idToken) {
          alert("No tokens returned from native Google sign-in");
          throw new Error("No tokens returned from native sign-in.");
        }
        console.log("web config:", {
          apiKey: auth?.app?.options?.apiKey ? "OK" : "MISSING",
          authDomain: auth?.app?.options?.authDomain ?? "MISSING",
          projectId: auth?.app?.options?.projectId ?? "MISSING",
          appId: auth?.app?.options?.appId ? "OK" : "MISSING"
        });
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        try {
          console.log("calling signInWithCredential");
          const authResult = await withTimeout(
            signInWithCredential(auth, credential),
            15000
          );
          console.log(
            "web firebase signed in:",
            authResult?.user?.uid,
            authResult?.user?.email
          );
          alert(`Signed in OK: ${authResult?.user?.email ?? ""}`);
          if (authResult?.user) {
            setAuthUser(authResult.user);
          }
        } catch (error) {
          innerAlerted = true;
          console.error("signInWithCredential failed:", error);
          console.log("signInWithCredential error raw:", error);
          console.log("name:", error?.name);
          console.log("code:", error?.code);
          console.log("message:", error?.message);
          console.log("customData:", error?.customData);
          console.log("stack:", error?.stack);
          alert(
            `signInWithCredential failed: ${
              error?.code || error?.message || String(error)
            }`
          );
          throw error;
        }
        return;
      }
      const authResult = await signInWithPopup(auth, googleProvider);
      if (authResult?.user) {
        setAuthUser(authResult.user);
      }
    } catch (error) {
      console.error("Google sign-in failed:", error);
      const detail = getErrorDetail(error);
      setAuthError(`Google sign-in failed: ${detail}`);
      if (!innerAlerted) {
        alert(`Google sign-in failed:\n\n${detail}`);
      }
    }
  };

  const handleSignOut = async () => {
    setAuthError("");
    try {
      if (Capacitor.isNativePlatform()) {
        await FirebaseAuthentication.signOut();
      }
      await signOut(auth);
    } catch (error) {
      setAuthError("Sign out failed. Please try again.");
    }
  };

  const handleOpenProfileModal = () => {
    if (!authUser) {
      return;
    }
    setDisplayNameDraft(userProfile?.displayName || authUser.displayName || "");
    setProfileAvatarDraft(userProfile?.avatarUrl || "");
    setDisplayNameError("");
    setProfileModalOpen(true);
  };

  const handleSendChatMessage = async (event) => {
    event.preventDefault();
    if (!authUser || chatSending) {
      return;
    }
    const trimmed = chatInput.trim();
    if (!trimmed) {
      return;
    }
    let messagesRef = null;
    if (chatScope === "global") {
      messagesRef = collection(db, "globalMessages");
    } else if (selectedChatLeagueId) {
      messagesRef = collection(db, "leagues", selectedChatLeagueId, "messages");
    } else {
      setChatError("Select a league to start chatting.");
      return;
    }
    setChatSending(true);
    try {
      await addDoc(messagesRef, {
        text: trimmed,
        userId: authUser.uid,
        userName: displayName,
        avatarUrl: profilePhotoUrl,
        createdAt: serverTimestamp()
      });
      setChatInput("");
      setChatError("");
    } catch (error) {
      setChatError("Unable to send message. Please try again.");
    } finally {
      setChatSending(false);
    }
  };

  const handleCreateLeague = async (event) => {
    event.preventDefault();
    if (!authUser) {
      return;
    }
    setLeagueError("");
    const trimmed = normalizeLeagueName(newLeagueName);
    if (!isValidLeagueName(trimmed)) {
      setLeagueError("League name must be 1-24 characters.");
      return;
    }
    setLeagueBusy(true);
    try {
      let code = generateLeagueCode();
      for (let attempt = 0; attempt < 3; attempt += 1) {
        const codeLower = normalizeLeagueCode(code);
        const snapshot = await getDocs(
          query(
            collection(db, "leagues"),
            where("codeLower", "==", codeLower),
            limit(1)
          )
        );
        if (snapshot.empty) {
          break;
        }
        code = generateLeagueCode();
      }
      const leagueRef = doc(collection(db, "leagues"));
      await setDoc(leagueRef, {
        name: trimmed,
        code,
        codeLower: normalizeLeagueCode(code),
        ownerId: authUser.uid,
        ownerName: userProfile?.displayName || authUser.displayName || "Player",
        memberIds: [authUser.uid],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      setNewLeagueName("");
      setSelectedLeagueId(leagueRef.id);
    } catch (error) {
      setLeagueError("Unable to create the league. Please try again.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleJoinLeague = async (event) => {
    event.preventDefault();
    if (!authUser) {
      return;
    }
    setLeagueError("");
    const normalized = normalizeLeagueCode(joinLeagueCode);
    if (!normalized) {
      setLeagueError("Enter a league code.");
      return;
    }
    setLeagueBusy(true);
    try {
      const snapshot = await getDocs(
        query(
          collection(db, "leagues"),
          where("codeLower", "==", normalized),
          limit(1)
        )
      );
      if (snapshot.empty) {
        setLeagueError("League code not found.");
        return;
      }
      const leagueDoc = snapshot.docs[0];
      const league = leagueDoc.data() || {};
      const memberIds = Array.isArray(league.memberIds) ? league.memberIds : [];
      if (memberIds.includes(authUser.uid)) {
        setSelectedLeagueId(leagueDoc.id);
        setLeagueError("You are already in this league.");
        return;
      }
      await updateDoc(leagueDoc.ref, {
        memberIds: arrayUnion(authUser.uid),
        updatedAt: serverTimestamp()
      });
      setJoinLeagueCode("");
      setSelectedLeagueId(leagueDoc.id);
    } catch (error) {
      setLeagueError("Unable to join the league. Please try again.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleKickLeagueMember = async (memberId) => {
    if (!selectedLeague || !isLeagueOwner || !memberId) {
      return;
    }
    if (memberId === selectedLeague.ownerId) {
      return;
    }
    setLeagueError("");
    setLeagueBusy(true);
    try {
      await updateDoc(doc(db, "leagues", selectedLeague.id), {
        memberIds: arrayRemove(memberId),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      setLeagueError("Unable to remove that member.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleDeleteLeague = async () => {
    if (!selectedLeague || !isLeagueOwner) {
      return;
    }
    const confirmed = window.confirm(
      "Delete this league? Members will lose access to this leaderboard."
    );
    if (!confirmed) {
      return;
    }
    setLeagueError("");
    setLeagueBusy(true);
    try {
      await deleteDoc(doc(db, "leagues", selectedLeague.id));
      setSelectedLeagueId(null);
    } catch (error) {
      setLeagueError("Unable to delete the league.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleOpenLeagueManager = () => {
    setLeagueManagerOpen(true);
  };

  const handleCloseLeagueManager = () => {
    setLeagueManagerOpen(false);
  };

  const handleKickManagedLeagueMember = async (memberId) => {
    if (!managedLeague || !isManagedLeagueOwner || !memberId) {
      return;
    }
    if (memberId === managedLeague.ownerId) {
      return;
    }
    setLeagueError("");
    setLeagueBusy(true);
    try {
      await updateDoc(doc(db, "leagues", managedLeague.id), {
        memberIds: arrayRemove(memberId),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      setLeagueError("Unable to remove that member.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleDeleteManagedLeague = async () => {
    if (!managedLeague || !isManagedLeagueOwner) {
      return;
    }
    const confirmed = window.confirm(
      "Delete this league? Members will lose access to this leaderboard."
    );
    if (!confirmed) {
      return;
    }
    setLeagueError("");
    setLeagueBusy(true);
    try {
      await deleteDoc(doc(db, "leagues", managedLeague.id));
      if (selectedLeagueId === managedLeague.id) {
        setSelectedLeagueId(null);
      }
      setManagedLeagueId(null);
    } catch (error) {
      setLeagueError("Unable to delete the league.");
    } finally {
      setLeagueBusy(false);
    }
  };

  const handleSeedPlayers = async () => {
    if (!isAdmin || defaultPlayers.length === 0) {
      return;
    }
    try {
      const batch = writeBatch(db);
      defaultPlayers.forEach((player) => {
        const playerRef = doc(db, "players", player.id);
        batch.set(playerRef, player);
      });
      await batch.commit();
    } catch (error) {
      setAuthError("Unable to seed players. Please try again.");
    }
  };

  const handleSeedSeason = async () => {
    if (!isAdmin) {
      return;
    }
    try {
      await setDoc(seasonRef, {
        weeks: buildDefaultWeeks(),
        weekEvents: {},
        currentWeekIndex: null,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      setAuthError("Unable to initialize the season.");
    }
  };

  const handleResetSeason = async () => {
    if (!isAdmin) {
      return;
    }
    const confirmed = window.confirm(
      "Reset the season to preseason? This clears all user teams, transfers, and weekly events."
    );
    if (!confirmed) {
      return;
    }
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersToReset = usersSnapshot.docs.map((docSnap) => ({
        id: docSnap.id
      }));
      const batch = writeBatch(db);
      batch.set(
        seasonRef,
        {
          currentWeekIndex: null,
          weekEvents: {},
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
      usersToReset.forEach((user) => {
        if (!user.id) {
          return;
        }
        const userRef = doc(db, "users", user.id);
        batch.set(
          userRef,
          {
            teams: {},
            transferBank: STARTING_TRANSFERS,
            preseasonLocked: false,
            hasCommittedTeam: false,
            lastSeenWeekIndex: -1,
            updatedAt: serverTimestamp()
          },
          { merge: true }
        );
      });
      await batch.commit();
      setCurrentWeekIndex(null);
      setWeekEvents({});
      setDisplayedWeekIndex(0);
      setLeaderboardWeekIndex(0);
      setTransferError("");
      setUserTeams({});
      setDraftTeams({});
      setTransferBank(STARTING_TRANSFERS);
      setPreseasonLocked(false);
    } catch (error) {
      setAuthError("Unable to reset the season.");
    }
  };

  const handleRandomizeEvents = () => {
    if (!isAdmin) {
      return;
    }
    if (weeks.length === 0 || players.length === 0) {
      return;
    }
    const confirmed = window.confirm(
      "Randomize week events for all weeks? This will overwrite existing event data."
    );
    if (!confirmed) {
      return;
    }
    const playerIds = players.map((player) => player.id);
    const pickRandom = (ids) => ids[Math.floor(Math.random() * ids.length)];
    const pickUnique = (ids, count) => {
      const pool = [...ids];
      const picks = [];
      while (pool.length > 0 && picks.length < count) {
        const index = Math.floor(Math.random() * pool.length);
        const [picked] = pool.splice(index, 1);
        picks.push(picked);
      }
      return picks;
    };
    const doubleEvictionWeekIndex = Math.floor(Math.random() * weeks.length);
    const nextWeekEvents = {};
    weeks.forEach((_, weekIndex) => {
      const isDouble = weekIndex === doubleEvictionWeekIndex;
      const roundsCount = isDouble ? 2 : 1;
      const playersForWeek = {};
      for (let roundIndex = 0; roundIndex < roundsCount; roundIndex += 1) {
        const touchedTarget = Math.min(
          playerIds.length,
          2 + Math.floor(Math.random() * 2)
        );
        const hohWinner = pickRandom(playerIds);
        let vetoWinner = pickRandom(playerIds);
        if (playerIds.length > 1) {
          while (vetoWinner === hohWinner) {
            vetoWinner = pickRandom(playerIds);
          }
        }
        const touchedIds = pickUnique(playerIds, touchedTarget);
        const ensurePlayerRounds = (playerId) => {
          if (!playersForWeek[playerId]) {
            playersForWeek[playerId] = { rounds: ensureTwoRounds([]) };
          }
          return playersForWeek[playerId].rounds;
        };
        const setEvent = (playerId, field) => {
          const rounds = ensurePlayerRounds(playerId);
          rounds[roundIndex] = { ...rounds[roundIndex], [field]: true };
        };
        setEvent(hohWinner, "hohWin");
        setEvent(vetoWinner, "vetoWin");
        touchedIds.forEach((playerId) => {
          setEvent(playerId, "touchedBlock");
        });
      }
      nextWeekEvents[weekIndex] = {
        doubleEviction: isDouble,
        players: playersForWeek
      };
    });
    setWeekEvents(nextWeekEvents);
    updateSeasonDoc({ weekEvents: nextWeekEvents }).catch(() => {
      setAuthError("Unable to randomize week events.");
    });
  };

  const toggleDoubleEviction = (weekIndex) => {
    if (!isAdmin) {
      return;
    }
    setWeekEvents((prev) => {
      const week = prev[weekIndex] ?? { doubleEviction: false, players: {} };
      const next = {
        ...prev,
        [weekIndex]: { ...week, doubleEviction: !week.doubleEviction }
      };
      updateSeasonDoc({ weekEvents: next }).catch(() => {
        setAuthError("Unable to update week settings.");
      });
      return next;
    });
  };

  const handleEventChange = (weekIndex, playerId, roundIndex, field, value) => {
    if (!isAdmin) {
      return;
    }
    setWeekEvents((prev) => {
      const week = prev[weekIndex] ?? { doubleEviction: false, players: {} };
      const rounds = ensureTwoRounds(week.players?.[playerId]?.rounds);
      rounds[roundIndex] = { ...rounds[roundIndex], [field]: value };
      const next = {
        ...prev,
        [weekIndex]: {
          ...week,
          players: {
            ...week.players,
            [playerId]: { rounds }
          }
        }
      };
      updateSeasonDoc({ weekEvents: next }).catch(() => {
        setAuthError("Unable to update week events.");
      });
      return next;
    });
  };

  const handleToggleEvict = (playerId) => {
    if (!isAdmin) {
      return;
    }
    const player = playersById.get(playerId);
    if (!player) {
      return;
    }
    const playerRef = doc(db, "players", playerId);
    if (player.isEvicted) {
      updateDoc(playerRef, { isEvicted: false, evictedWeekIndex: null }).catch(
        () => {
          setAuthError("Unable to restore player. Please try again.");
        }
      );
      return;
    }
    const evictedWeekIndex = currentWeekIndex ?? nextWeekIndex;
    updateDoc(playerRef, { isEvicted: true, evictedWeekIndex }).catch(() => {
      setAuthError("Unable to evict player. Please try again.");
    });
  };

  const handleEvictionWeekChange = (playerId, value) => {
    if (!isAdmin) {
      return;
    }
    if (value === "") {
      return;
    }
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return;
    }
    const maxWeek = Math.max(weeks.length, 1);
    const clamped = Math.min(Math.max(Math.trunc(numeric), 1), maxWeek);
    updateDoc(doc(db, "players", playerId), {
      evictedWeekIndex: clamped - 1
    }).catch(() => {
      setAuthError("Unable to update eviction week.");
    });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      setNewPlayerPhoto("");
      setPhotoPreview("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewPlayerPhoto(reader.result);
        setPhotoPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarPhotoChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      setNewAvatarPhoto("");
      setAvatarPreview("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewAvatarPhoto(reader.result);
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();
    if (!isAdmin) {
      return;
    }
    const trimmed = newPlayerName.trim();
    if (!trimmed) {
      return;
    }
    const player = {
      id: createPlayerId(trimmed),
      name: trimmed,
      photo: newPlayerPhoto,
      points: 0,
      isEvicted: false,
      evictedWeekIndex: null
    };
    setDoc(doc(db, "players", player.id), player).catch(() => {
      setAuthError("Unable to add player. Please try again.");
      return;
    });
    setNewPlayerName("");
    setNewPlayerPhoto("");
    setPhotoPreview("");
    event.currentTarget.reset();
  };

  const handleAddAvatar = (event) => {
    event.preventDefault();
    if (!isAdmin || !newAvatarPhoto) {
      return;
    }
    const avatar = {
      id: createPlayerId("avatar"),
      photo: newAvatarPhoto,
      createdAt: serverTimestamp()
    };
    setDoc(doc(db, "avatars", avatar.id), avatar).catch(() => {
      setAuthError("Unable to add avatar. Please try again.");
      return;
    });
    setNewAvatarPhoto("");
    setAvatarPreview("");
    event.currentTarget.reset();
  };

  const handleRemoveAvatar = (avatarId) => {
    if (!isAdmin) {
      return;
    }
    deleteDoc(doc(db, "avatars", avatarId)).catch(() => {
      setAuthError("Unable to remove avatar. Please try again.");
    });
  };

  const handleRemovePlayer = (playerId) => {
    if (!isAdmin) {
      return;
    }
    deleteDoc(doc(db, "players", playerId)).catch(() => {
      setAuthError("Unable to remove player. Please try again.");
    });
    setWeekEvents((prev) => {
      const next = {};
      Object.entries(prev).forEach(([key, week]) => {
        if (!week?.players) {
          next[key] = week;
          return;
        }
        const nextPlayers = { ...week.players };
        delete nextPlayers[playerId];
        next[key] = { ...week, players: nextPlayers };
      });
      updateSeasonDoc({ weekEvents: next }).catch(() => {
        setAuthError("Unable to update week events after removal.");
      });
      return next;
    });
  };

  const handleWeekDeadlineChange = (index, value) => {
    if (!isAdmin) {
      return;
    }
    if (!value) {
      return;
    }
    const iso = fromPTInputValue(value);
    if (!iso) {
      return;
    }
    const nextWeeks = weeks.map((week, i) =>
      i === index ? { ...week, deadline: iso } : week
    );
    setWeeks(nextWeeks);
    updateSeasonDoc({ weeks: nextWeeks }).catch(() => {
      setAuthError("Unable to update the deadline.");
    });
  };

  const handleAddWeek = () => {
    if (!isAdmin) {
      return;
    }
    const nextIndex = weeks.length;
    const baseDeadline = weeks.length
      ? new Date(weeks[weeks.length - 1].deadline)
      : new Date();
    const nextDeadline = new Date(baseDeadline);
    nextDeadline.setDate(baseDeadline.getDate() + 7);
    const nextWeeks = [
      ...weeks,
      {
        id: nextIndex + 1,
        name: `Week ${nextIndex + 1}`,
        deadline: nextDeadline.toISOString()
      }
    ];
    setWeeks(nextWeeks);
    updateSeasonDoc({ weeks: nextWeeks }).catch(() => {
      setAuthError("Unable to add the week.");
    });
  };

  const handleRemoveWeek = (index) => {
    if (!isAdmin) {
      return;
    }
    if (index !== weeks.length - 1) {
      return;
    }
    const nextWeeks = weeks.slice(0, -1);
    const nextWeekEvents = { ...weekEvents };
    delete nextWeekEvents[index];
    const nextCurrentWeekIndex =
      currentWeekIndex === null
        ? null
        : Math.min(currentWeekIndex, Math.max(nextWeeks.length - 1, 0));
    setWeeks(nextWeeks);
    setWeekEvents(nextWeekEvents);
    setCurrentWeekIndex(nextCurrentWeekIndex);
    updateSeasonDoc({
      weeks: nextWeeks,
      weekEvents: nextWeekEvents,
      currentWeekIndex: nextCurrentWeekIndex
    }).catch(() => {
      setAuthError("Unable to remove the week.");
    });
  };

  const goToPreviousWeek = () => {
    setDisplayedWeekIndex((prev) => Math.max(minViewIndex, prev - 1));
  };

  const goToNextWeek = () => {
    setDisplayedWeekIndex((prev) => Math.min(maxViewIndex, prev + 1));
  };

  const goToNextWeekPick = () => {
    if (!nextWeek) {
      return;
    }
    setDisplayedWeekIndex(nextWeekIndex);
  };

  const handleOpenLeaderboardTeam = (userId) => {
    const user = leaderboardUsersById.get(userId);
    if (!user) {
      return;
    }
    setLeaderboardViewUserId(userId);
    const lockedWeeks = getLockedTeamWeeks(user.teams, currentWeekIndex);
    if (lockedWeeks.length) {
      setLeaderboardViewWeekIndex(lockedWeeks[lockedWeeks.length - 1]);
      return;
    }
    setLeaderboardViewWeekIndex(0);
  };

  const handleCloseLeaderboardTeam = () => {
    setLeaderboardViewUserId(null);
    setLeaderboardBreakdownSelection(null);
  };

  const goToLeaderboardPreviousWeek = () => {
    if (leaderboardViewWeekPosition <= 0) {
      return;
    }
    setLeaderboardViewWeekIndex(
      leaderboardViewWeeks[leaderboardViewWeekPosition - 1]
    );
  };

  const goToLeaderboardNextWeek = () => {
    if (
      leaderboardViewWeekPosition === -1 ||
      leaderboardViewWeekPosition >= leaderboardViewWeeks.length - 1
    ) {
      return;
    }
    setLeaderboardViewWeekIndex(
      leaderboardViewWeeks[leaderboardViewWeekPosition + 1]
    );
  };

  const renderReadOnlySlot = (slot, team, weekIndex, backupAppliedSlots) => {
    const playerId = team?.[slot.id];
    const player = playersById.get(playerId);
    const groupId = slot.group === "HOH Room" ? "hoh" : "block";
    const isEvictedForWeek = isPlayerEvictedForWeek(player, weekIndex);
    const isBackupApplied = backupAppliedSlots?.has(slot.id);
    const slotPoints = getWeekPointsForPlayer(
      weekEvents,
      weekIndex,
      player,
      slot.group
    );
    const pointsClass =
      slotPoints > 0 ? "positive" : slotPoints < 0 ? "negative" : "";

    return (
      <article
        className={`slot-card ${isEvictedForWeek ? "evicted" : ""}`}
        key={slot.id}
      >
        {isEvictedForWeek && (
          <span
            className="evicted-badge"
            title="Player evicted, won't score future points"
            aria-label="Evicted"
          >
            !
          </span>
        )}
        {isBackupApplied && (
          <span className="backup-badge" title="Backup applied">
            Backup
          </span>
        )}
        <button
          type="button"
          className="slot-avatar-button"
          onClick={() => {
            if (!playerId) {
              return;
            }
            setLeaderboardBreakdownSelection({
              playerId,
              groupId
            });
          }}
          disabled={!playerId}
        >
          <div className="slot-avatar">
            {player && player.photo ? (
              <img src={player.photo} alt={player.name} draggable="false" />
            ) : (
              <span>{getInitials(player?.name)}</span>
            )}
          </div>
        </button>
        <div className="slot-info">
          <p className="slot-name">{player ? player.name : "Open slot"}</p>
          <p className={`slot-score ${pointsClass}`}>{slotPoints}</p>
        </div>
      </article>
    );
  };

  const renderSlotCard = (slot) => {
    const playerId = viewTeamWithBackups[slot.id];
    const player = playersById.get(playerId);
    const groupId = slot.group === "HOH Room" ? "hoh" : "block";
    const isEvictedForWeek = isPlayerEvictedForWeek(player, displayedWeekIndex);
    const isBackupApplied = backupAppliedSlots.has(slot.id);
    const isSlotChanged =
      isEditable &&
      (draftNextTeam[slot.id] || "") !== (savedNextTeam[slot.id] || "");
    const slotPoints = getWeekPointsForPlayer(
      weekEvents,
      displayedWeekIndex,
      player,
      slot.group
    );
    const pointsClass =
      slotPoints > 0 ? "positive" : slotPoints < 0 ? "negative" : "";
    const selectedIds = isEditable
      ? new Set(
          rosterSlots
            .filter((item) => item.id !== slot.id)
            .map((item) => draftNextTeam[item.id])
            .filter(Boolean)
        )
      : new Set();
    const isMenuOpen = openSelectSlotId === slot.id;
    const handleToggleMenu = () => {
      setOpenSelectSlotId((prev) => (prev === slot.id ? null : slot.id));
    };
    const handleSelectPlayer = (id) => {
      handleTeamChange(slot.id, id);
      setOpenSelectSlotId(null);
    };

    return (
      <article
        className={`slot-card ${isEvictedForWeek ? "evicted" : ""} ${
          isSlotChanged ? "pending-change" : ""
        }`}
        key={slot.id}
      >
        {isEvictedForWeek && (
          <span
            className="evicted-badge"
            title="Player evicted, won't score future points"
            aria-label="Evicted"
          >
            !
          </span>
        )}
        {isBackupApplied && (
          <span className="backup-badge" title="Backup applied">
            Backup
          </span>
        )}
        <button
          type="button"
          className="slot-avatar-button"
          onClick={() => {
            if (!playerId) {
              return;
            }
            setBreakdownSelection({
              playerId,
              groupId
            });
          }}
          disabled={!playerId}
        >
          <div className="slot-avatar">
            {player && player.photo ? (
              <img src={player.photo} alt={player.name} />
            ) : (
              <span>{getInitials(player?.name)}</span>
            )}
          </div>
        </button>
        <div className="slot-info">
          <p className="slot-name">{player ? player.name : "Open slot"}</p>
          {!isEditable && (
            <p className={`slot-score ${pointsClass}`}>{slotPoints}</p>
          )}
        </div>
        {isEditable && (
          <>
            <div className="slot-actions">
              <div className="player-select">
                <button
                  type="button"
                  className="slot-action-button"
                  onClick={handleToggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-label={playerId ? "Change player" : "Select player"}
                  title={playerId ? "Change player" : "Select player"}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 7h11m0 0-3-3m3 3-3 3M20 17H9m0 0 3-3m-3 3 3 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="player-select-menu">
                    {sortedPlayers.length === 0 && (
                      <p className="empty-note">No players available.</p>
                    )}
                    {sortedPlayers.map((option) => {
                      const disabled =
                        selectedIds.has(option.id) || option.isEvicted;
                      return (
                        <button
                          type="button"
                          key={option.id}
                          className={`player-option ${
                            disabled ? "disabled" : ""
                          }`}
                          onClick={() => handleSelectPlayer(option.id)}
                          disabled={disabled}
                        >
                          <span className="avatar-small">
                            {option.photo ? (
                              <img src={option.photo} alt={option.name} />
                            ) : (
                              <span>{getInitials(option.name)}</span>
                            )}
                          </span>
                          <span>{option.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <button
                type="button"
                className="slot-action-button danger"
                onClick={() => handleRemoveFromSlot(slot.id)}
                disabled={!playerId}
                aria-label="Remove player"
                title="Remove player"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </article>
    );
  };

  const renderPlaceholder = (title, message) => (
    <section className="placeholder">
      <header className="page-header">
        <div>
          <p className="eyebrow">Big Brother Fantasy</p>
          <h1>{title}</h1>
          <p className="page-subtitle">{message}</p>
        </div>
      </header>
      <div className="placeholder-card">
        <p>{message}</p>
      </div>
    </section>
  );

  const renderChat = () => (
    <section className="chat-view">
      <header className="page-header">
        <div>
          <p className="eyebrow">Big Brother Fantasy</p>
          <h1>Chat</h1>
          <p className="page-subtitle">
            {chatScope === "global"
              ? "Talk with everyone playing the game."
              : "Chat with players in your private leagues."}
          </p>
        </div>
      </header>
      {!authUser && (
        <p className="notice">Sign in to join the conversation.</p>
      )}
      <div className="chat-card">
        <div className="chat-tabs toggle-group">
          <button
            type="button"
            className={chatScope === "global" ? "accent" : "ghost"}
            onClick={() => setChatScope("global")}
          >
            Global
          </button>
          <button
            type="button"
            className={chatScope === "leagues" ? "accent" : "ghost"}
            onClick={() => setChatScope("leagues")}
          >
            Leagues
          </button>
        </div>
        {chatScope === "leagues" && (
          <div className="chat-league-list">
            {memberLeagues.length === 0 ? (
              <p className="empty-note">Join a league to unlock league chat.</p>
            ) : (
              <div className="league-pills">
                {memberLeagues.map((league) => (
                  <button
                    type="button"
                    key={league.id}
                    className={`league-pill ${
                      league.id === selectedChatLeagueId ? "active" : ""
                    }`}
                    onClick={() => setSelectedChatLeagueId(league.id)}
                  >
                    {league.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="chat-header">
          <h3>{chatTitle}</h3>
        </div>
        {chatError && <p className="notice">{chatError}</p>}
        <div className="chat-thread" ref={chatThreadRef}>
          {chatMessages.length === 0 ? (
            <p className="empty-note">No messages yet.</p>
          ) : (
            chatMessages.map((message) => {
              const messageName = message.userName || "Player";
              const isOwn = message.userId === authUser?.uid;
              return (
                <div
                  key={message.id}
                  className={`chat-message ${isOwn ? "own" : ""}`}
                >
                  <div className="avatar-small">
                    {message.avatarUrl ? (
                      <img src={message.avatarUrl} alt={messageName} />
                    ) : (
                      <span>{getInitials(messageName)}</span>
                    )}
                  </div>
                  <div className="chat-message-body">
                    <div className="chat-message-header">
                      <span className="chat-message-name">{messageName}</span>
                      <span className="chat-message-time">
                        {formatMessageTime(message.createdAt)}
                      </span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <form className="chat-input" onSubmit={handleSendChatMessage}>
          <input
            type="text"
            placeholder={
              chatScope === "global"
                ? "Send a message to everyone"
                : "Send a message to your league"
            }
            value={chatInput}
            onChange={(event) => setChatInput(event.target.value)}
            disabled={isChatDisabled}
            maxLength={280}
          />
          <button type="submit" disabled={isChatDisabled || chatSending}>
            Send
          </button>
        </form>
      </div>
    </section>
  );

  const renderLeaderboard = () => {
    const isLeagueView = leaderboardScope === "leagues";
    const renderPagination = (currentPage, totalPages, onChange) => {
      if (totalPages <= 1) {
        return null;
      }
      return (
        <div className="leaderboard-pagination">
          <button
            type="button"
            className="ghost"
            onClick={() => onChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <span className="leaderboard-page-label">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="ghost"
            onClick={() => onChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      );
    };
    const renderLeaderboardFilter = () => (
      <div className="leaderboard-filter" ref={leaderboardFilterRef}>
        <button
          type="button"
          className={`leaderboard-filter-trigger ${
            leaderboardFilterOpen ? "open" : ""
          }`}
          onClick={() => setLeaderboardFilterOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={leaderboardFilterOpen}
        >
          <span className="leaderboard-filter-label">{leaderboardFilterLabel}</span>
          <ChevronIcon direction={leaderboardFilterOpen ? "up" : "down"} />
        </button>
        {leaderboardFilterOpen && (
          <div className="leaderboard-filter-menu" role="listbox">
            {leaderboardFilterOptions.map((option) => {
              const isSelected =
                (option.mode === "season" && leaderboardMode === "season") ||
                (option.mode === "week" &&
                  leaderboardMode === "week" &&
                  option.weekIndex === leaderboardWeekIndex);
              return (
                <button
                  type="button"
                  key={`${option.mode}-${option.weekIndex ?? "total"}`}
                  className={`leaderboard-filter-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => {
                    if (option.mode === "season") {
                      setLeaderboardMode("season");
                    } else {
                      setLeaderboardMode("week");
                      setLeaderboardWeekIndex(option.weekIndex ?? 0);
                    }
                    setLeaderboardFilterOpen(false);
                  }}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span>{option.label}</span>
                  {isSelected && <span className="leaderboard-filter-dot" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
    return (
      <section className="leaderboard-view">
        <header className="page-header">
          <div>
            <p className="eyebrow">Big Brother Fantasy</p>
            <h1>{isLeagueView ? "Private Leagues" : "Global Leaderboard"}</h1>
            {isLeagueView && (
              <p className="page-subtitle">
                Create or join leagues to compete with friends.
              </p>
            )}
          </div>
          <div className="leaderboard-controls">
            <div className="toggle-group">
              <button
                type="button"
                className={leaderboardScope === "global" ? "accent" : "ghost"}
                onClick={() => setLeaderboardScope("global")}
              >
                Global
              </button>
              <button
                type="button"
                className={leaderboardScope === "leagues" ? "accent" : "ghost"}
                onClick={() => setLeaderboardScope("leagues")}
              >
                Private leagues
              </button>
            </div>
          </div>
        </header>

        {!isLeagueView ? (
          <div className="leaderboard-card">
            <div
              className={`leaderboard-card-toolbar ${
                authUser ? "has-rank" : ""
              }`}
            >
              {authUser && (
                <p className="leaderboard-rank-note">
                  You: {leaderboardUserRankLabel}
                </p>
              )}
              {renderLeaderboardFilter()}
            </div>
            {leaderboardEntries.length === 0 ? (
              <p className="empty-note">No leaderboard data yet.</p>
            ) : (
              <ol className="leaderboard-list">
                {leaderboardPageEntries.map((entry, index) => {
                  const rank = leaderboardPageStart + index + 1;
                  return (
                  <li key={entry.id}>
                    <button
                      type="button"
                      className="leaderboard-row"
                      onClick={() => handleOpenLeaderboardTeam(entry.id)}
                      aria-label={`View ${entry.name}'s team`}
                    >
                      <span className="leaderboard-rank">#{rank}</span>
                      <div className="leaderboard-user">
                        <div className="avatar-small">
                          {entry.photoURL ? (
                            <img src={entry.photoURL} alt={entry.name} />
                          ) : (
                            <span>{getInitials(entry.name)}</span>
                          )}
                        </div>
                        <div>
                          <p className="player-name">{entry.name}</p>
                          <p className="player-status">
                            {leaderboardEntryLabel || "Total"}
                          </p>
                        </div>
                      </div>
                      <span className="leaderboard-score">{entry.points} pts</span>
                    </button>
                  </li>
                  );
                })}
              </ol>
            )}
            {renderPagination(leaderboardPage, leaderboardPageCount, setLeaderboardPage)}
          </div>
        ) : (
          <div className="leaderboard-card league-card">
            {!selectedLeague ? (
              <>
                <div className="league-join">
                  <form className="league-join-form" onSubmit={handleJoinLeague}>
                    <label className="league-join-field">
                      <span className="league-join-label">Join a league</span>
                      <input
                        type="text"
                        value={joinLeagueCode}
                        onChange={(event) => setJoinLeagueCode(event.target.value)}
                        placeholder="Enter code"
                        disabled={!authUser || leagueBusy}
                      />
                    </label>
                    <button type="submit" disabled={!authUser || leagueBusy}>
                      Join
                    </button>
                  </form>
                  <button
                    type="button"
                    className="ghost league-manage-button"
                    onClick={handleOpenLeagueManager}
                    disabled={!authUser || leagueBusy}
                  >
                    Manage or create leagues
                  </button>
                </div>
                {leagueError && <p className="notice">{leagueError}</p>}
                {memberLeagues.length > 0 && (
                  <div className="league-list">
                    <div className="league-rows">
                      {memberLeagues.map((league) => (
                        <button
                          type="button"
                          key={league.id}
                          className="league-row"
                          onClick={() => setSelectedLeagueId(league.id)}
                        >
                          <span>{league.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="league-detail">
                <div className="league-detail-header league-detail-header--inline">
                  <div className="league-detail-title">
                    <button
                      type="button"
                      className="league-back"
                      onClick={() => {
                        setSelectedLeagueId(null);
                        setLeaderboardFilterOpen(false);
                      }}
                      aria-label="Back to leagues"
                    >
                      <ChevronIcon direction="left" />
                    </button>
                    <h3>{selectedLeague.name}</h3>
                  </div>
                  {renderLeaderboardFilter()}
                </div>
                <div className="league-leaderboard">
                  {leagueEntries.length === 0 ? (
                    <p className="empty-note">No league data yet.</p>
                  ) : (
                    <ol className="leaderboard-list">
                      {leaguePageEntries.map((entry, index) => {
                        const rank = leaguePageStart + index + 1;
                        return (
                        <li key={entry.id}>
                          <button
                            type="button"
                            className="leaderboard-row"
                            onClick={() => handleOpenLeaderboardTeam(entry.id)}
                            aria-label={`View ${entry.name}'s team`}
                          >
                            <span className="leaderboard-rank">#{rank}</span>
                            <div className="leaderboard-user">
                              <div className="avatar-small">
                                {entry.photoURL ? (
                                  <img src={entry.photoURL} alt={entry.name} />
                                ) : (
                                  <span>{getInitials(entry.name)}</span>
                                )}
                              </div>
                              <div>
                                <p className="player-name">{entry.name}</p>
                                <p className="player-status">
                                  {leaderboardEntryLabel || "Total"}
                                </p>
                              </div>
                            </div>
                            <span className="leaderboard-score">
                              {entry.points} pts
                            </span>
                          </button>
                        </li>
                        );
                      })}
                    </ol>
                  )}
                </div>
                {renderPagination(leaguePage, leaguePageCount, setLeaguePage)}
              </div>
            )}
          </div>
        )}
      </section>
    );
  };

  return (
    <div
      className="app-shell"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <main className="app">
        <div className="account-stack">
          <div className="account-bar">
            <div className="account-card">
              <div className="account-info">
                <button
                  type="button"
                  className="avatar-button"
                  onClick={handleOpenProfileModal}
                  disabled={!authUser}
                >
                  <span className="avatar-small">
                    {profilePhotoUrl ? (
                      <img src={profilePhotoUrl} alt={displayName} />
                    ) : (
                      <span>{getInitials(displayName)}</span>
                    )}
                  </span>
                </button>
                <div>
                  <p className="account-name">
                    {authUser ? displayName : "Not signed in"}
                  </p>
                  <p className="account-status">
                    {authUser
                      ? authUser.email || "Google account"
                      : authLoading
                        ? "Checking session..."
                        : "Sign in to join the leaderboard."}
                  </p>
                </div>
              </div>
              <div className="account-actions">
                {authUser ? (
                  <button type="button" className="ghost" onClick={handleSignOut}>
                    Sign out
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={authLoading}
                  >
                    Sign in with Google
                  </button>
                )}
              </div>
            </div>
          </div>
          {!authUser && activeTab === "team" && (
            <p className="notice account-notice">
              Sign in to save your team and appear on the leaderboard.
            </p>
          )}
          {authError && <p className="notice">{authError}</p>}
        </div>
        {showProfileModal && (
          <div className="modal-backdrop">
            <div className="modal profile-modal" role="dialog" aria-modal="true">
              <div className="modal-header">
                <div>
                  <p className="eyebrow">Player Profile</p>
                  <h2>{needsDisplayName ? "Create your profile" : "Edit profile"}</h2>
                  <p className="page-subtitle">
                    Choose a nickname and a profile photo for the leaderboard.
                  </p>
                </div>
                {!needsDisplayName && (
                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setProfileModalOpen(false)}
                    aria-label="Close profile"
                  >
                    <CloseIcon />
                  </button>
                )}
              </div>
              <div className="modal-body">
                <label>
                  Nickname
                  <input
                    type="text"
                    placeholder="Pick a nickname"
                    maxLength={20}
                    value={displayNameDraft}
                    onChange={(event) => {
                      setDisplayNameDraft(event.target.value);
                      setDisplayNameError("");
                    }}
                  />
                </label>
                {displayNameError && <p className="form-error">{displayNameError}</p>}
                <div className="avatar-picker">
                  <p className="picker-label">Choose a profile photo</p>
                  <div className="avatar-grid">
                    <button
                      type="button"
                      className={`avatar-option ${
                        profileAvatarDraft ? "" : "selected"
                      }`}
                      onClick={() => setProfileAvatarDraft("")}
                    >
                      <span>No photo</span>
                    </button>
                    {avatarOptions.map((avatar) => (
                      <button
                        type="button"
                        key={avatar.id}
                        className={`avatar-option ${
                          profileAvatarDraft === avatar.photo ? "selected" : ""
                        }`}
                        onClick={() => setProfileAvatarDraft(avatar.photo)}
                      >
                        <img src={avatar.photo} alt="Avatar option" />
                      </button>
                    ))}
                    {avatarOptions.length === 0 && (
                      <p className="empty-note">No avatar options yet.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={handleSaveProfile}>
                  Save profile
                </button>
              </div>
            </div>
          </div>
        )}

        {transferConfirmOpen && (
          <div className="modal-backdrop">
            <div className="modal confirm-modal" role="dialog" aria-modal="true">
              <div className="modal-header">
                <div>
                  <h2 className="confirm-title">Confirm Changes</h2>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setTransferConfirmOpen(false)}
                  aria-label="Close transfer summary"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="modal-body">
                {transferSummary.length === 0 ? (
                  <p className="empty-note">No changes to save yet.</p>
                ) : (
                  <div className="transfer-groups">
                    {rosterGroups.map((group) => {
                      const groupChanges = transferSummary.filter(
                        (change) => change.groupId === group.id
                      );
                      return (
                        <div className="transfer-group" key={group.id}>
                          <div className="transfer-group-header">
                            <h3>{group.title}</h3>
                            <span>
                              {groupChanges.length} change
                              {groupChanges.length === 1 ? "" : "s"}
                            </span>
                          </div>
                          {groupChanges.length === 0 ? (
                            <p className="empty-note">No transfers made.</p>
                          ) : (
                            <div className="transfer-cards">
                              {groupChanges.map((change) => {
                                const fromPlayer = change.fromId
                                  ? playersById.get(change.fromId)
                                  : null;
                                const toPlayer = change.toId
                                  ? playersById.get(change.toId)
                                  : null;
                                const fromName = fromPlayer?.name || "Open slot";
                                const toName = toPlayer?.name || "Open slot";
                                return (
                                  <div className="transfer-card" key={change.slotId}>
                                    <span className="transfer-slot">
                                      {change.slotLabel}
                                    </span>
                                    <div className="transfer-swap">
                                      <div className="transfer-player from">
                                        <div className="avatar-small">
                                          {fromPlayer?.photo ? (
                                            <img
                                              src={fromPlayer.photo}
                                              alt={fromName}
                                              draggable="false"
                                            />
                                          ) : (
                                            <span>{getInitials(fromName)}</span>
                                          )}
                                        </div>
                                        <span>{fromName}</span>
                                      </div>
                                      <span className="transfer-arrow" aria-hidden="true">
                                        <SwapArrowIcon />
                                      </span>
                                      <div className="transfer-player to">
                                        <div className="avatar-small">
                                          {toPlayer?.photo ? (
                                            <img
                                              src={toPlayer.photo}
                                              alt={toName}
                                              draggable="false"
                                            />
                                          ) : (
                                            <span>{getInitials(toName)}</span>
                                          )}
                                        </div>
                                        <span>{toName}</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                <p className="helper">
                  Transfers used: {transfersUsed} / {transferBank}
                </p>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="ghost"
                  onClick={() => setTransferConfirmOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmTransfers}
                  disabled={!canSaveTransfers}
                >
                  Confirm changes
                </button>
              </div>
            </div>
          </div>
          )}
          {leagueManagerOpen && (
            <div className="modal-backdrop">
              <div className="modal league-manager-modal" role="dialog" aria-modal="true">
                <div className="modal-header">
                  <div>
                    <h2 className="leaderboard-title">Manage or create leagues</h2>
                    <p className="page-subtitle">
                      Create new leagues and manage the ones you own.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={handleCloseLeagueManager}
                    aria-label="Close league manager"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="modal-body">
                  {!authUser ? (
                    <p className="empty-note">
                      Sign in to create or manage private leagues.
                    </p>
                  ) : (
                    <>
                      <div className="league-manager-grid">
                        <div className="league-manager-card">
                          <div className="card-title">
                            <h3>Create a league</h3>
                            <p>Set a name and share the invite code.</p>
                          </div>
                          <form className="league-form" onSubmit={handleCreateLeague}>
                            <label>
                              League name
                              <input
                                type="text"
                                value={newLeagueName}
                                onChange={(event) =>
                                  setNewLeagueName(event.target.value)
                                }
                                placeholder="League name"
                                maxLength={24}
                              />
                            </label>
                            <button type="submit" disabled={leagueBusy}>
                              Create
                            </button>
                          </form>
                        </div>
                        <div className="league-manager-card">
                          <div className="card-title">
                            <h3>Your leagues</h3>
                            <p>Select a league to manage members.</p>
                          </div>
                          {ownedLeagues.length === 0 ? (
                            <p className="empty-note">No leagues created yet.</p>
                          ) : (
                            <div className="league-pills">
                              {ownedLeagues.map((league) => (
                                <button
                                  type="button"
                                  key={league.id}
                                  className={`league-pill ${
                                    league.id === managedLeagueId ? "active" : ""
                                  }`}
                                  onClick={() => setManagedLeagueId(league.id)}
                                >
                                  {league.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {leagueError && <p className="notice">{leagueError}</p>}
                      {managedLeague ? (
                        <div className="league-manager-detail">
                          <div className="league-detail-header">
                            <div>
                              <h3>{managedLeague.name}</h3>
                              <p className="helper">
                                Code:{" "}
                                {managedLeague.code ||
                                  (managedLeague.codeLower || "").toUpperCase()}
                              </p>
                            </div>
                            {isManagedLeagueOwner && (
                              <button
                                type="button"
                                className="ghost"
                                onClick={handleDeleteManagedLeague}
                                disabled={leagueBusy}
                              >
                                Delete league
                              </button>
                            )}
                          </div>
                          <div className="league-members">
                            <h3>Members</h3>
                            <ul>
                              {managedLeagueMembers.map((member) => {
                                const memberName =
                                  member?.displayName ||
                                  member?.email ||
                                  "Player";
                                const memberPhoto =
                                  member?.avatarUrl || member?.photoURL || "";
                                return (
                                  <li key={member.id}>
                                    <div className="leaderboard-user">
                                      <div className="avatar-small">
                                        {memberPhoto ? (
                                          <img src={memberPhoto} alt={memberName} />
                                        ) : (
                                          <span>{getInitials(memberName)}</span>
                                        )}
                                      </div>
                                      <span>{memberName}</span>
                                    </div>
                                    {isManagedLeagueOwner &&
                                      member.id !== managedLeague.ownerId && (
                                        <button
                                          type="button"
                                          className="ghost"
                                          onClick={() =>
                                            handleKickManagedLeagueMember(
                                              member.id
                                            )
                                          }
                                          disabled={leagueBusy}
                                        >
                                          Kick
                                        </button>
                                      )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        ownedLeagues.length > 0 && (
                          <p className="empty-note">
                            Select a league to manage members.
                          </p>
                        )
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {leaderboardViewUser && (
            <div className="modal-backdrop">
              <div className="modal leaderboard-modal" role="dialog" aria-modal="true">
                <div className="modal-header">
                  <div>
                    <h2 className="leaderboard-title">
                      {leaderboardViewUser.displayName || "Player"}&#39;s Team
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={handleCloseLeaderboardTeam}
                    aria-label="Close team view"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="modal-body">
                  {leaderboardViewWeeks.length === 0 ? (
                    <p className="empty-note">No locked weeks yet.</p>
                  ) : (
                    <div className="leaderboard-team-groups">
                      <div className="leaderboard-week-row">
                        <div className="leaderboard-week-spacer" aria-hidden="true" />
                        <div className="week-nav week-nav--slim leaderboard-team-nav">
                          <button
                            type="button"
                            onClick={goToLeaderboardPreviousWeek}
                            disabled={leaderboardViewWeekPosition <= 0}
                            aria-label="Previous week"
                          >
                            <ChevronIcon direction="left" />
                          </button>
                          <span className="week-label">
                            {leaderboardViewWeekLabel}
                          </span>
                          <button
                            type="button"
                            onClick={goToLeaderboardNextWeek}
                            disabled={
                              leaderboardViewWeekPosition === -1 ||
                              leaderboardViewWeekPosition >=
                                leaderboardViewWeeks.length - 1
                            }
                            aria-label="Next week"
                          >
                            <ChevronIcon direction="right" />
                          </button>
                        </div>
                        <div className="team-metric leaderboard-week-points">
                          <span className="team-metric-value">
                            {leaderboardViewWeekPoints}
                          </span>
                        </div>
                      </div>
                      {rosterGroups.map((group) => {
                        const breakdownPlayer =
                          leaderboardBreakdownSelection?.groupId === group.id
                            ? playersById.get(
                                leaderboardBreakdownSelection.playerId
                              )
                            : null;
                        const breakdownEntries = breakdownPlayer
                          ? buildPlayerBreakdown(
                              weekEvents,
                              leaderboardViewWeekIndex,
                              breakdownPlayer.id,
                              group.title
                            )
                          : [];
                        const breakdownPoints = breakdownPlayer
                          ? getWeekPointsForPlayer(
                              weekEvents,
                              leaderboardViewWeekIndex,
                              breakdownPlayer,
                              group.title
                            )
                          : 0;
                        const breakdownInactive = breakdownPlayer
                          ? isPlayerInactiveForWeek(
                              breakdownPlayer,
                              leaderboardViewWeekIndex
                            )
                          : false;

                        return (
                          <section className="team-group" key={`lb-${group.id}`}>
                            <div className="group-header">
                              <div className="group-info">
                                <h2>{group.title}</h2>
                                <p>{group.description}</p>
                              </div>
                            </div>
                            <div className={`slot-grid slot-grid--${group.id}`}>
                              {group.slots.map((slot) =>
                                renderReadOnlySlot(
                                  slot,
                                  leaderboardViewTeamWithBackups,
                                  leaderboardViewWeekIndex,
                                  leaderboardViewBackupAppliedSlots
                                )
                              )}
                            </div>
                            {breakdownPlayer && (
                              <div
                                className="breakdown-overlay"
                                onClick={() =>
                                  setLeaderboardBreakdownSelection(null)
                                }
                              >
                                <div
                                  className="breakdown-card"
                                  onClick={(event) => event.stopPropagation()}
                                >
                                  <button
                                    type="button"
                                    className="modal-close"
                                    onClick={() =>
                                      setLeaderboardBreakdownSelection(null)
                                    }
                                    aria-label="Close breakdown"
                                  >
                                    <CloseIcon />
                                  </button>
                                  <div className="breakdown-header">
                                    <div className="slot-avatar">
                                      {breakdownPlayer.photo ? (
                                        <img
                                          src={breakdownPlayer.photo}
                                          alt={breakdownPlayer.name}
                                          draggable="false"
                                        />
                                      ) : (
                                        <span>
                                          {getInitials(breakdownPlayer.name)}
                                        </span>
                                      )}
                                    </div>
                                    <div>
                                      <p className="slot-name">
                                        {breakdownPlayer.name}
                                      </p>
                                      <p className="slot-points">
                                        {formatSignedPoints(breakdownPoints)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="breakdown-body">
                                    {breakdownInactive ? (
                                      <p className="empty-note">
                                        Player evicted, no points this week.
                                      </p>
                                    ) : breakdownEntries.length === 0 ? (
                                      <p className="empty-note">
                                        No events recorded yet.
                                      </p>
                                    ) : (
                                      <ul className="breakdown-list">
                                        {breakdownEntries.map((entry) => (
                                          <li key={entry.label}>
                                            <span>{entry.label}</span>
                                            <span>
                                              {formatSignedPoints(entry.points)}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </section>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div
            className={`tab-panel ${
              tabTransitionDirection ? `tab-panel--${tabTransitionDirection}` : ""
            }`}
            key={tabTransitionKey}
          >
          {activeTab === "team" && (
            <section className="team-view">
              <header className="page-header team-header">
                <div className="team-header-info">
                  <div className="meta-card deadline-card">
                    <span className="meta-label">{deadlineTitle}</span>
                    <span className="meta-value">{deadlineCountdown}</span>
                    <span className="meta-helper">{deadlineLabel}</span>
                  </div>
                  {!isPreseason && !isEditable && (
                    <button
                      type="button"
                      className="pick-button team-change-button"
                      onClick={goToNextWeekPick}
                      disabled={!nextWeek || !authUser}
                    >
                      Make changes
                    </button>
                  )}
                  {showTeamHeading && <h1>{teamHeaderTitle}</h1>}
                </div>
              </header>

              {transferError && <p className="notice">{transferError}</p>}
              {authUser && isDrafting && !isPreseason && nextWeek && (
                <p className="notice">
                  You missed the start of the season. No worries, you can join for
                  Week {nextWeekIndex + 1}.
                </p>
              )}

              {!nextWeek && (
                <div className="empty-state">
                  <p>No upcoming week. Add one in Admin to keep drafting.</p>
                </div>
              )}

              {players.length === 0 && (
                <div className="empty-state">
                  <p>Add players in Admin to start building your team.</p>
                </div>
              )}

              {(nextWeek || Number.isFinite(currentWeekIndex)) && (
                <div className="team-controls">
                  <div className="team-metric">
                    <span className="team-metric-value">{teamMetricValue}</span>
                    {teamMetricLabel && (
                      <span className="team-metric-label">{teamMetricLabel}</span>
                    )}
                  </div>
                  <div className="week-nav week-nav--slim">
                    <button
                      type="button"
                      onClick={goToPreviousWeek}
                      disabled={displayedWeekIndex <= minViewIndex}
                      aria-label="Previous week"
                    >
                      <ChevronIcon direction="left" />
                    </button>
                    <span className="week-label">
                      Week {displayedWeekIndex + 1}
                    </span>
                    <button
                      type="button"
                      onClick={goToNextWeek}
                      disabled={displayedWeekIndex >= maxViewIndex}
                      aria-label="Next week"
                    >
                      <ChevronIcon direction="right" />
                    </button>
                  </div>
                </div>
              )}

            {rosterGroups.map((group) => {
              const breakdownPlayer =
                breakdownSelection?.groupId === group.id
                  ? playersById.get(breakdownSelection.playerId)
                  : null;
              const breakdownEntries = breakdownPlayer
                ? buildPlayerBreakdown(
                    weekEvents,
                    displayedWeekIndex,
                    breakdownPlayer.id,
                    group.title
                  )
                : [];
              const breakdownPoints = breakdownPlayer
                ? getWeekPointsForPlayer(
                    weekEvents,
                    displayedWeekIndex,
                    breakdownPlayer,
                    group.title
                  )
                : 0;
              const breakdownInactive = breakdownPlayer
                ? isPlayerInactiveForWeek(breakdownPlayer, displayedWeekIndex)
                : false;
              const isBackupOpen = backupPanelOpen === group.id;
              const backupId =
                group.id === "hoh" ? hohBackupPlayerId : blockBackupPlayerId;
              const otherBackupId =
                group.id === "hoh" ? blockBackupPlayerId : hohBackupPlayerId;
              const backupPlayer = backupId ? playersById.get(backupId) : null;
              const backupMenuOpen = backupSelectOpen === group.id;
              const backupStarterIds = isEditable
                ? new Set(Object.values(draftNextTeam).filter(Boolean))
                : new Set();
              const backupDisabledIds = new Set(
                [...backupStarterIds, otherBackupId].filter(Boolean)
              );
              const backupButtonLabel = backupId ? "Select backup" : "Open slot";

              return (
                <section className="team-group" key={group.id}>
                  <div className="backup-shelf">
                    <div
                      className={`backup-track ${isBackupOpen ? "open" : ""}`}
                      data-group={group.id}
                    >
                      <div className="backup-main">
                        <div className="group-header group-header--backup">
                          <div className="group-info">
                            <h2>{group.title}</h2>
                            <p>{group.description}</p>
                          </div>
                          <button
                            type="button"
                            className="backup-toggle"
                            onClick={() => handleToggleBackupPanel(group.id)}
                            aria-expanded={isBackupOpen}
                            aria-label={
                              isBackupOpen
                                ? "Hide backup panel"
                                : "Show backup panel"
                            }
                          >
                            <ChevronIcon direction={isBackupOpen ? "left" : "right"} />
                          </button>
                        </div>
                        <div className={`slot-grid slot-grid--${group.id}`}>
                          {group.slots.map((slot) => renderSlotCard(slot))}
                        </div>
                      </div>
                      <aside className="backup-panel" aria-hidden={!isBackupOpen}>
                        <div className="backup-panel-card">
                          <div className="backup-panel-header">
                            <h3 className="backup-title">Backup player</h3>
                            <p className="backup-subtitle">
                              Select a player to come in if one of your players
                              is inactive.
                            </p>
                          </div>
                          <div className="backup-current">
                            <span className="backup-label">Current backup</span>
                            {backupPlayer ? (
                              <div className="backup-current-card">
                                <span className="avatar-small">
                                  {backupPlayer.photo ? (
                                    <img
                                      src={backupPlayer.photo}
                                      alt={backupPlayer.name}
                                    />
                                  ) : (
                                    <span>{getInitials(backupPlayer.name)}</span>
                                  )}
                                </span>
                                <span>{backupPlayer.name}</span>
                              </div>
                            ) : (
                              <p className="backup-empty">None selected</p>
                            )}
                          </div>
                          <div className="backup-actions">
                            <div className="player-select backup-select">
                              <button
                                type="button"
                                className="player-select-trigger"
                                onClick={() =>
                                  handleToggleBackupSelect(group.id)
                                }
                                aria-expanded={backupMenuOpen}
                                disabled={!isEditable}
                              >
                                <span>{backupButtonLabel}</span>
                                <ChevronIcon
                                  direction={backupMenuOpen ? "up" : "down"}
                                />
                              </button>
                              {backupMenuOpen && (
                                <div className="player-select-menu backup-select-menu">
                                  <button
                                    type="button"
                                    className="player-option"
                                    onClick={() => {
                                      handleBackupChange(group.id, "");
                                      setBackupSelectOpen(null);
                                    }}
                                  >
                                    <span className="avatar-small backup-open-slot">
                                      +
                                    </span>
                                    <span>Open slot</span>
                                  </button>
                                  {sortedPlayers.length === 0 && (
                                    <p className="empty-note">
                                      No players available.
                                    </p>
                                  )}
                                  {sortedPlayers.map((option) => {
                                    const disabled =
                                      backupDisabledIds.has(option.id) ||
                                      option.isEvicted;
                                    return (
                                      <button
                                        type="button"
                                        key={option.id}
                                        className={`player-option ${
                                          disabled ? "disabled" : ""
                                        }`}
                                        onClick={() => {
                                          handleBackupChange(group.id, option.id);
                                          setBackupSelectOpen(null);
                                        }}
                                        disabled={disabled}
                                      >
                                        <span className="avatar-small">
                                          {option.photo ? (
                                            <img
                                              src={option.photo}
                                              alt={option.name}
                                            />
                                          ) : (
                                            <span>{getInitials(option.name)}</span>
                                          )}
                                        </span>
                                        <span>{option.name}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <p className="backup-note">
                              Changing this player won&#39;t use a transfer.
                            </p>
                            {!isEditable && (
                              <p className="backup-disabled">
                                Backups can only be changed while picking next
                                week.
                              </p>
                            )}
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                  {breakdownPlayer && (
                    <div
                      className="breakdown-overlay"
                      onClick={() => setBreakdownSelection(null)}
                    >
                      <div
                        className="breakdown-card"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <button
                          type="button"
                          className="modal-close"
                          onClick={() => setBreakdownSelection(null)}
                          aria-label="Close breakdown"
                        >
                          <CloseIcon />
                        </button>
                        <div className="breakdown-header">
                          <div className="slot-avatar">
                            {breakdownPlayer.photo ? (
                              <img
                                src={breakdownPlayer.photo}
                                alt={breakdownPlayer.name}
                              />
                            ) : (
                              <span>{getInitials(breakdownPlayer.name)}</span>
                            )}
                          </div>
                          <div>
                            <p className="slot-name">{breakdownPlayer.name}</p>
                            <p className="slot-points">
                              {formatSignedPoints(breakdownPoints)}
                            </p>
                          </div>
                        </div>
                        <div className="breakdown-body">
                          {breakdownInactive ? (
                            <p className="empty-note">
                              Player evicted, no points this week.
                            </p>
                          ) : breakdownEntries.length === 0 ? (
                            <p className="empty-note">No events recorded yet.</p>
                          ) : (
                            <ul className="breakdown-list">
                              {breakdownEntries.map((entry) => (
                                <li key={entry.label}>
                                  <span>{entry.label}</span>
                                  <span>{formatSignedPoints(entry.points)}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}

            {isEditable && !isPreseason && !isDrafting && (
              <div className="transfer-actions">
                <button
                  type="button"
                  className="ghost"
                  onClick={handleResetDraft}
                  disabled={!hasDraftChanges}
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={handleOpenTransferConfirm}
                  disabled={!canSaveTransfers}
                >
                  Save transfers
                </button>
              </div>
            )}

            {isEditable && (isPreseason || isDrafting) && (
              <div className="preseason-actions">
                  <button
                    type="button"
                    onClick={handlePreseasonSave}
                    disabled={
                      !authUser ||
                      !nextWeek ||
                      !isTeamComplete(draftNextTeam)
                    }
                  >
                    Save team
                  </button>
                </div>
              )}
          </section>
        )}

        {activeTab === "chat" && renderChat()}

        {activeTab === "boards" && renderLeaderboard()}

        {activeTab === "admin" && isAdmin && (
          <section className="admin-view">
            <header className="page-header">
              <div>
                <p className="eyebrow">Commissioner Tools</p>
                <div className="admin-title-row">
                  <h1>Admin Panel</h1>
                  <span
                    className="build-tag"
                    title={BUILD_TIME ? `Build ${BUILD_TIME}` : "Build info"}
                  >
                    {VERSION_LABEL}
                  </span>
                </div>
                <p className="page-subtitle">
                  Add houseguests, manage weeks, and advance the season.
                </p>
              </div>
              <div className="meta-row">
                <div className="meta-card">
                  <span className="meta-label">Active week</span>
                  <span className="meta-value">{activeWeekLabel}</span>
                  <span className="meta-helper">
                    Next: {nextWeek ? nextWeek.name : "None"}
                  </span>
                </div>
                <div className="meta-card accent">
                  <span className="meta-label">Transfer bank</span>
                  <span className="meta-value">{transferBank}</span>
                  <span className="meta-helper">Max {MAX_TRANSFERS} per week</span>
                </div>
              </div>
            </header>

            <div className="admin-grid">
              <div className="admin-card">
                <div className="card-title">
                  <h2>Add player</h2>
                  <p>Upload a headshot and name.</p>
                </div>
                <form className="admin-form" onSubmit={handleAddPlayer}>
                  <label>
                    Player name
                    <input
                      type="text"
                      placeholder="Houseguest name"
                      value={newPlayerName}
                      onChange={(event) => setNewPlayerName(event.target.value)}
                    />
                  </label>
                  <label>
                    Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </label>
                  <div className="photo-preview">
                    <div className="slot-avatar preview">
                      {photoPreview ? (
                        <img src={photoPreview} alt="Preview" />
                      ) : (
                        <span>{getInitials(newPlayerName)}</span>
                      )}
                    </div>
                    <p>Preview</p>
                  </div>
                  <button type="submit">Add player</button>
                </form>
              </div>

              <div className="admin-card">
                <div className="card-title">
                  <h2>Players</h2>
                  <p>Manage the current roster.</p>
                </div>
                <div className="admin-list">
                  {sortedPlayers.map((player) => (
                    <div
                      className={`admin-player ${player.isEvicted ? "evicted" : ""}`}
                      key={player.id}
                    >
                      <div className="admin-player-info">
                        <div className="avatar-small">
                          {player.photo ? (
                            <img src={player.photo} alt={player.name} />
                          ) : (
                            <span>{getInitials(player.name)}</span>
                          )}
                        </div>
                        <div>
                          <p className="player-name">{player.name}</p>
                          <p className="player-status">Points: {player.points}</p>
                        </div>
                      </div>
                      <div className="admin-actions">
                        <button
                          type="button"
                          className="ghost"
                          onClick={() => handleRemovePlayer(player.id)}
                        >
                          Remove
                        </button>
                        <div className="evict-week">
                          <span>Week</span>
                          <input
                            type="number"
                            min="1"
                            max={Math.max(weeks.length, 1)}
                            value={
                              player.isEvicted
                                ? getEvictedWeekIndex(player) + 1
                                : ""
                            }
                            onChange={(event) =>
                              handleEvictionWeekChange(
                                player.id,
                                event.target.value
                              )
                            }
                            disabled={!player.isEvicted}
                            aria-label="Eviction week"
                          />
                        </div>
                        <button
                          type="button"
                          className={player.isEvicted ? "ghost" : "danger"}
                          onClick={() => handleToggleEvict(player.id)}
                        >
                          {player.isEvicted ? "Restore" : "Evict"}
                        </button>
                      </div>
                    </div>
                  ))}
                  {players.length === 0 && (
                    <>
                      <p className="empty-note">No players added yet.</p>
                      <button type="button" className="ghost" onClick={handleSeedPlayers}>
                        Seed sample players
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="admin-card">
                <div className="card-title">
                  <h2>Profile avatars</h2>
                  <p>Upload photos users can pick for their profile.</p>
                </div>
                <form className="admin-form" onSubmit={handleAddAvatar}>
                  <label>
                    Avatar photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarPhotoChange}
                    />
                  </label>
                  <div className="photo-preview">
                    <div className="slot-avatar preview">
                      {avatarPreview ? (
                        <img src={avatarPreview} alt="Avatar preview" />
                      ) : (
                        <span>?</span>
                      )}
                    </div>
                    <p>Preview</p>
                  </div>
                  <button type="submit" disabled={!newAvatarPhoto}>
                    Add avatar
                  </button>
                </form>
                <div className="avatar-list">
                  {avatarOptions.map((avatar) => (
                    <div className="avatar-row" key={avatar.id}>
                      <div className="avatar-small">
                        <img src={avatar.photo} alt="Avatar option" />
                      </div>
                      <button
                        type="button"
                        className="ghost"
                        onClick={() => handleRemoveAvatar(avatar.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {avatarOptions.length === 0 && (
                    <p className="empty-note">No avatars uploaded yet.</p>
                  )}
                </div>
              </div>

              <div className="admin-card admin-wide">
                <div className="card-title">
                  <h2>Weeks and deadlines</h2>
                  <p>Edit deadlines or add new weeks.</p>
                </div>
                {(!seasonExists || weeks.length === 0) && (
                  <div className="empty-state">
                    <p>No season data yet. Initialize weeks to get started.</p>
                    <button type="button" className="ghost" onClick={handleSeedSeason}>
                      Initialize season
                    </button>
                  </div>
                )}
                <div className="week-list">
                  {weeks.map((week, index) => {
                    const weekData = weekEvents[index] ?? {
                      doubleEviction: false,
                      players: {}
                    };
                    const isDouble = weekData.doubleEviction;
                    return (
                      <div className="week-panel" key={week.id}>
                        <div className="week-row">
                          <div>
                            <p className="week-name">{week.name}</p>
                            <p className="player-status">
                              Deadline: {formatDeadline(week.deadline)}
                            </p>
                          </div>
                          <input
                            type="datetime-local"
                            value={toPTInputValue(week.deadline)}
                            onChange={(event) =>
                              handleWeekDeadlineChange(index, event.target.value)
                            }
                          />
                          {weeks.length > 1 && (
                            <button
                              type="button"
                              className="ghost"
                              onClick={() => handleRemoveWeek(index)}
                              disabled={index !== weeks.length - 1}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <details className="week-events">
                          <summary>Week {index + 1} events</summary>
                          <div className="week-events-body">
                            <label className="toggle">
                              <input
                                type="checkbox"
                                checked={isDouble}
                                onChange={() => toggleDoubleEviction(index)}
                              />
                              Double eviction week
                            </label>
                            <p className="helper">
                              Evicted automatically counts as touching the block.
                            </p>
                            {players.length === 0 ? (
                              <p className="empty-note">
                                Add players to start tracking events.
                              </p>
                            ) : (
                              <div className="event-grid">
                                {sortedPlayers.map((player) => {
                                  const rounds = ensureTwoRounds(
                                    weekData.players?.[player.id]?.rounds
                                  );
                                  const roundsToShow = isDouble
                                    ? rounds
                                    : rounds.slice(0, 1);
                                  const isEvictedForWeek = isPlayerEvictedForWeek(
                                    player,
                                    index
                                  );
                                  const hohPoints = getWeekPointsForPlayer(
                                    weekEvents,
                                    index,
                                    player,
                                    "HOH Room"
                                  );
                                  const blockPoints = getWeekPointsForPlayer(
                                    weekEvents,
                                    index,
                                    player,
                                    "The Block"
                                  );
                                  return (
                                    <div
                                      className={`event-player ${
                                        isEvictedForWeek ? "evicted" : ""
                                      }`}
                                      key={player.id}
                                    >
                                      <div className="event-player-header">
                                        <div className="avatar-small">
                                          {player.photo ? (
                                            <img
                                              src={player.photo}
                                              alt={player.name}
                                            />
                                          ) : (
                                            <span>{getInitials(player.name)}</span>
                                          )}
                                        </div>
                                        <div>
                                          <p className="player-name">
                                            {player.name}
                                          </p>
                                          <p className="player-status">
                                            HOH: {hohPoints} · Block: {blockPoints}
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className={`event-rounds ${
                                          isDouble ? "double" : ""
                                        }`}
                                      >
                                        {roundsToShow.map((round, roundIndex) => (
                                          <div
                                            className="event-round"
                                            key={`${player.id}-${roundIndex}`}
                                          >
                                            {isDouble && (
                                              <p className="event-round-title">
                                                Round {roundIndex + 1}
                                              </p>
                                            )}
                                            <div className="event-checks">
                                              {eventOptions.map((option) => {
                                                const isTouched =
                                                  option.id === "touchedBlock";
                                                const checked = isTouched
                                                  ? round.touchedBlock ||
                                                    round.evicted
                                                  : round[option.id];
                                                const disabled =
                                                  isTouched && round.evicted;
                                                return (
                                                  <label
                                                    className="event-check"
                                                    key={`${player.id}-${option.id}-${roundIndex}`}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      checked={checked}
                                                      disabled={disabled}
                                                      onChange={(event) =>
                                                        handleEventChange(
                                                          index,
                                                          player.id,
                                                          roundIndex,
                                                          option.id,
                                                          event.target.checked
                                                        )
                                                      }
                                                    />
                                                    <span>{option.label}</span>
                                                  </label>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </details>
                      </div>
                    );
                  })}
                </div>
                <div className="week-actions">
                  <button type="button" onClick={handleAddWeek}>
                    Add week
                  </button>
                  <button
                    type="button"
                    className="ghost"
                    onClick={handleRandomizeEvents}
                    disabled={weeks.length === 0 || players.length === 0}
                  >
                    Randomize events
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={handleResetSeason}
                    disabled={weeks.length === 0}
                  >
                    Reset to preseason
                  </button>
                  <button
                    type="button"
                    className="accent"
                    onClick={advanceWeek}
                    disabled={!nextWeek}
                  >
                    Go to next week
                  </button>
                  <p className="helper">
                    Advancing locks the current week and opens the next week for
                    transfers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        </div>
      </main>

      <nav
        className="tab-bar"
        style={{
          gridTemplateColumns: `repeat(${visibleTabs.length}, minmax(0, 1fr))`
        }}
      >
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
