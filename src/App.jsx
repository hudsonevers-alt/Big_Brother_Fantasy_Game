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
  const [openSelectSlotId, setOpenSelectSlotId] = useState(null);
  const [leaderboardMode, setLeaderboardMode] = useState("season");
  const [leaderboardWeekIndex, setLeaderboardWeekIndex] = useState(0);
  const [leaderboardScope, setLeaderboardScope] = useState("global");
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
  const playersById = useMemo(
    () => new Map(players.map((player) => [player.id, player])),
    [players]
  );
  const leaderboardUsersById = useMemo(
    () => new Map(leaderboardUsers.map((user) => [user.id, user])),
    [leaderboardUsers]
  );
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    if (window.__fetchDebugPatched) {
      return;
    }
    window.__fetchDebugPatched = true;
    const originalFetch = window.fetch.bind(window);
    window.fetch = async (...args) => {
      console.log("[fetch]", args[0]);
      try {
        const response = await originalFetch(...args);
        if (
          response.ok &&
          typeof args[0] === "string" &&
          args[0].includes("identitytoolkit.googleapis.com")
        ) {
          try {
            const bodyText = await response.clone().text();
            console.log(
              "[fetch body]",
              args[0],
              bodyText.slice(0, 200)
            );
          } catch (error) {
            console.log("[fetch body error]", args[0], String(error));
          }
        }
        console.log("[fetch ok]", args[0], response.status);
        return response;
      } catch (error) {
        console.log("[fetch fail]", args[0], String(error));
        throw error;
      }
    };
    console.log("checkpoint A: fetch wrapper installed", window.location.origin);
  }, []);
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
  const selectedLeague = useMemo(
    () => leagues.find((league) => league.id === selectedLeagueId) || null,
    [leagues, selectedLeagueId]
  );
  const leagueMembers = useMemo(() => {
    if (!selectedLeague) {
      return [];
    }
    const memberIds = Array.isArray(selectedLeague.memberIds)
      ? selectedLeague.memberIds
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
  }, [leaderboardUsersById, selectedLeague]);
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
  const seasonRef = useMemo(() => doc(db, "season", "state"), []);

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
  }, [authUser, players, playersLoaded, updateUserDoc]);

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
      setActiveTab("team");
    }
  }, [activeTab, isAdmin]);

  useEffect(() => {
    if (Number.isFinite(currentWeekIndex)) {
      setLeaderboardWeekIndex(currentWeekIndex);
    }
  }, [currentWeekIndex]);

  useEffect(() => {
    setLeaderboardWeekIndex((prev) =>
      Math.min(prev, Math.max(weeks.length - 1, 0))
    );
  }, [weeks.length]);

  useEffect(() => {
    if (!authUser) {
      setSelectedLeagueId(null);
      return;
    }
    if (leaderboardScope !== "leagues") {
      return;
    }
    if (!memberLeagues.length) {
      setSelectedLeagueId(null);
      return;
    }
    if (!memberLeagues.some((league) => league.id === selectedLeagueId)) {
      setSelectedLeagueId(memberLeagues[0].id);
    }
  }, [authUser, leaderboardScope, memberLeagues, selectedLeagueId]);

  useEffect(() => {
    setLeagueError("");
  }, [leaderboardScope]);

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
  const deadlineLabel = nextWeek ? formatDeadline(nextWeek.deadline) : "Add a week";
  const displayedWeek = weeks[displayedWeekIndex] || null;
  const displayedWeekLabel = displayedWeek
    ? displayedWeek.name
    : `Week ${displayedWeekIndex + 1}`;
  const lineupLabel = displayedWeek
    ? `Lineup for ${displayedWeekLabel}`
    : "Add a new week to keep playing.";
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

  useEffect(() => {
    if (!isEditable) {
      setOpenSelectSlotId(null);
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
        const playerId = viewTeam[slot.id];
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
    [displayedWeekIndex, playersById, viewTeam, weekEvents]
  );

  const getTeamPointsForWeek = useCallback(
    (team, weekIndex) =>
      rosterSlots.reduce((sum, slot) => {
        const playerId = team?.[slot.id];
        const player = playersById.get(playerId);
        return (
          sum +
          getWeekPointsForPlayer(weekEvents, weekIndex, player, slot.group)
        );
      }, 0),
    [playersById, weekEvents]
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
        const seasonTotal = weeks.reduce(
          (sum, _week, index) =>
            sum + getTeamPointsForWeek(teams[index] || emptyTeam, index),
          0
        );
        const weekPoints = getTeamPointsForWeek(
          teams[leaderboardWeekIndex] || emptyTeam,
          leaderboardWeekIndex
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
        const seasonTotal = weeks.reduce(
          (sum, _week, index) =>
            sum + getTeamPointsForWeek(teams[index] || emptyTeam, index),
          0
        );
        const weekPoints = getTeamPointsForWeek(
          teams[leaderboardWeekIndex] || emptyTeam,
          leaderboardWeekIndex
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
  const leaderboardViewTeam = leaderboardViewUser
    ? leaderboardViewUser.teams?.[leaderboardViewWeekIndex] || emptyTeam
    : emptyTeam;
  const leaderboardViewWeekPoints = useMemo(
    () => getTeamPointsForWeek(leaderboardViewTeam, leaderboardViewWeekIndex),
    [getTeamPointsForWeek, leaderboardViewTeam, leaderboardViewWeekIndex]
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
          if (hasAnyPlayer(currentTeam) && !hasAnyPlayer(nextTeam)) {
            batch.set(
              doc(db, "users", docSnap.id),
              {
                teams: {
                  ...teams,
                  [nextWeekIndex]: currentTeam
                },
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
    try {
      await updateUserDoc({ teams: nextTeams });
      setUserTeams(nextTeams);
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
    const patch = {
      teams: nextTeams,
      hasCommittedTeam: true,
      preseasonLocked: false
    };
    updateUserDoc(patch).catch(() => {
      setAuthError("Unable to save your team.");
    });
    setUserTeams(nextTeams);
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
        console.log(
          "checkpoint A2: fetch wrapper active",
          typeof window !== "undefined" && window.__fetchDebugPatched
            ? "yes"
            : "no"
        );
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        console.log("checkpoint B: credential created");
        try {
          const apiKey = auth?.app?.options?.apiKey;
          if (apiKey) {
            console.log("checkpoint C: before probe fetch");
            try {
              const probeUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`;
              const probeResponse = await withTimeout(
                fetch(probeUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ idToken: "bad" })
                }),
                12000
              );
              console.log("checkpoint D: after probe fetch", probeResponse.status);
              const probeText = await withTimeout(probeResponse.text(), 12000);
              console.log("checkpoint E: after probe text");
              console.log("identitytoolkit probe accounts:lookup:", {
                status: probeResponse.status,
                body: probeText.slice(0, 300)
              });
            } catch (error) {
              console.warn("identitytoolkit probe failed:", error);
            } finally {
              console.log("checkpoint E2: probe finished");
            }
          } else {
            console.warn("identitytoolkit probe skipped: missing apiKey");
            console.log("checkpoint E2: probe skipped");
          }
          console.log("checkpoint F: before signInWithCredential");
          console.log("calling signInWithCredential");
          const authResult = await withTimeout(
            signInWithCredential(auth, credential),
            15000
          );
          console.log("checkpoint G: after signInWithCredential");
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

  const renderReadOnlySlot = (slot, team, weekIndex) => {
    const playerId = team?.[slot.id];
    const player = playersById.get(playerId);
    const isEvictedForWeek = isPlayerEvictedForWeek(player, weekIndex);
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
        <div className="slot-top">
          <span className="slot-tag">{slot.label}</span>
          <span className="slot-group">{slot.group}</span>
        </div>
        <div className="slot-avatar">
          {player && player.photo ? (
            <img src={player.photo} alt={player.name} />
          ) : (
            <span>{getInitials(player?.name)}</span>
          )}
        </div>
        <div className="slot-info">
          <p className="slot-name">{player ? player.name : "Open slot"}</p>
          <p className={`slot-score ${pointsClass}`}>{slotPoints}</p>
        </div>
      </article>
    );
  };

  const renderSlotCard = (slot) => {
    const playerId = viewTeam[slot.id];
    const player = playersById.get(playerId);
    const groupId = slot.group === "HOH Room" ? "hoh" : "block";
    const isEvictedForWeek = isPlayerEvictedForWeek(player, displayedWeekIndex);
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
        <div className="slot-top">
          <span className="slot-tag">{slot.label}</span>
          <span className="slot-group">{slot.group}</span>
        </div>
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
                  className="ghost change-button"
                  onClick={handleToggleMenu}
                  aria-expanded={isMenuOpen}
                >
                  {playerId ? "Change" : "Select"}
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
                className="ghost"
                onClick={() => handleRemoveFromSlot(slot.id)}
                disabled={!playerId}
              >
                Remove
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
    return (
      <section className="leaderboard-view">
        <header className="page-header">
          <div>
            <p className="eyebrow">Big Brother Fantasy</p>
            <h1>{isLeagueView ? "Private Leagues" : "Global Leaderboard"}</h1>
            <p className="page-subtitle">
              {isLeagueView
                ? "Create or join leagues to compete with friends."
                : "Track season totals or drill into a specific week."}
            </p>
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
            <div className="toggle-group">
              <button
                type="button"
                className={leaderboardMode === "season" ? "accent" : "ghost"}
                onClick={() => setLeaderboardMode("season")}
              >
                Season total
              </button>
              <button
                type="button"
                className={leaderboardMode === "week" ? "accent" : "ghost"}
                onClick={() => setLeaderboardMode("week")}
              >
                Week view
              </button>
            </div>
            {leaderboardMode === "week" && (
              <select
                value={leaderboardWeekIndex}
                onChange={(event) =>
                  setLeaderboardWeekIndex(Number(event.target.value))
                }
                disabled={weeks.length === 0}
              >
                {weeks.map((week, index) => (
                  <option key={week.id ?? index} value={index}>
                    {week.name || `Week ${index + 1}`}
                  </option>
                ))}
              </select>
            )}
          </div>
        </header>

        {!isLeagueView ? (
          <div className="leaderboard-card">
            {leaderboardEntries.length === 0 ? (
              <p className="empty-note">No leaderboard data yet.</p>
            ) : (
              <ol className="leaderboard-list">
                {leaderboardEntries.map((entry, index) => (
                  <li key={entry.id}>
                    <button
                      type="button"
                      className="leaderboard-row"
                      onClick={() => handleOpenLeaderboardTeam(entry.id)}
                      aria-label={`View ${entry.name}'s team`}
                    >
                      <span className="leaderboard-rank">#{index + 1}</span>
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
                            {leaderboardMode === "season"
                              ? "Season total"
                              : `Week ${leaderboardWeekIndex + 1}`}
                          </p>
                        </div>
                      </div>
                      <span className="leaderboard-score">{entry.points} pts</span>
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ) : (
          <div className="leaderboard-card league-card">
            {!authUser ? (
              <p className="empty-note">
                Sign in to create or join a private league.
              </p>
            ) : (
              <>
                <div className="league-actions">
                  <form className="league-form" onSubmit={handleCreateLeague}>
                    <label>
                      Create a league
                      <input
                        type="text"
                        value={newLeagueName}
                        onChange={(event) => setNewLeagueName(event.target.value)}
                        placeholder="League name"
                        maxLength={24}
                      />
                    </label>
                    <button type="submit" disabled={leagueBusy}>
                      Create
                    </button>
                  </form>
                  <form className="league-form" onSubmit={handleJoinLeague}>
                    <label>
                      Join with code
                      <input
                        type="text"
                        value={joinLeagueCode}
                        onChange={(event) => setJoinLeagueCode(event.target.value)}
                        placeholder="Enter code"
                      />
                    </label>
                    <button type="submit" disabled={leagueBusy}>
                      Join
                    </button>
                  </form>
                </div>
                {leagueError && <p className="notice">{leagueError}</p>}
                <div className="league-list">
                  <p className="helper">Your leagues</p>
                  {memberLeagues.length === 0 ? (
                    <p className="empty-note">No leagues yet.</p>
                  ) : (
                    <div className="league-pills">
                      {memberLeagues.map((league) => (
                        <button
                          type="button"
                          key={league.id}
                          className={`league-pill ${
                            league.id === selectedLeagueId ? "active" : ""
                          }`}
                          onClick={() => setSelectedLeagueId(league.id)}
                        >
                          {league.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {selectedLeague ? (
                  <div className="league-detail">
                    <div className="league-detail-header">
                      <div>
                        <h3>{selectedLeague.name}</h3>
                        <p className="helper">
                          Code:{" "}
                          {selectedLeague.code ||
                            (selectedLeague.codeLower || "").toUpperCase()}
                        </p>
                      </div>
                      {isLeagueOwner && (
                        <button
                          type="button"
                          className="ghost"
                          onClick={handleDeleteLeague}
                          disabled={leagueBusy}
                        >
                          Delete league
                        </button>
                      )}
                    </div>
                    <div className="league-leaderboard">
                      {leagueEntries.length === 0 ? (
                        <p className="empty-note">No league data yet.</p>
                      ) : (
                        <ol className="leaderboard-list">
                          {leagueEntries.map((entry, index) => (
                            <li key={entry.id}>
                              <button
                                type="button"
                                className="leaderboard-row"
                                onClick={() => handleOpenLeaderboardTeam(entry.id)}
                                aria-label={`View ${entry.name}'s team`}
                              >
                                <span className="leaderboard-rank">
                                  #{index + 1}
                                </span>
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
                                      {leaderboardMode === "season"
                                        ? "Season total"
                                        : `Week ${leaderboardWeekIndex + 1}`}
                                    </p>
                                  </div>
                                </div>
                                <span className="leaderboard-score">
                                  {entry.points} pts
                                </span>
                              </button>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                    <div className="league-members">
                      <h3>Members</h3>
                      <ul>
                        {leagueMembers.map((member) => {
                          const memberName =
                            member?.displayName || member?.email || "Player";
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
                              {isLeagueOwner && member.id !== selectedLeague.ownerId && (
                                <button
                                  type="button"
                                  className="ghost"
                                  onClick={() => handleKickLeagueMember(member.id)}
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
                  <p className="empty-note">
                    Select a league to view standings.
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="app-shell">
      <div
        className="app-version"
        title={BUILD_TIME ? `Build ${BUILD_TIME}` : "Build info"}
      >
        {VERSION_LABEL}
      </div>
      <main className="app">
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
        {authError && <p className="notice">{authError}</p>}
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
                    X
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
                  <p className="eyebrow">Confirm transfers</p>
                  <h2>Save changes</h2>
                  <p className="page-subtitle">
                    Review the updates before locking next week&apos;s team.
                  </p>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setTransferConfirmOpen(false)}
                  aria-label="Close transfer summary"
                >
                  X
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
                                      <div className="transfer-player">
                                        <div className="avatar-small">
                                          {fromPlayer?.photo ? (
                                            <img
                                              src={fromPlayer.photo}
                                              alt={fromName}
                                            />
                                          ) : (
                                            <span>{getInitials(fromName)}</span>
                                          )}
                                        </div>
                                        <span>{fromName}</span>
                                      </div>
                                      <span className="transfer-arrow" aria-hidden="true">
                                        <svg
                                          viewBox="0 0 24 12"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M1 6H21M21 6L17 2M21 6L17 10"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <div className="transfer-player">
                                        <div className="avatar-small">
                                          {toPlayer?.photo ? (
                                            <img src={toPlayer.photo} alt={toName} />
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
                  Confirm save
                </button>
              </div>
            </div>
          </div>
          )}
          {leaderboardViewUser && (
            <div className="modal-backdrop">
              <div className="modal leaderboard-modal" role="dialog" aria-modal="true">
                <div className="modal-header">
                  <div>
                    <p className="eyebrow">Team View</p>
                    <h2>
                      {leaderboardViewUser.displayName || "Player"}&#39;s lineup
                    </h2>
                    <p className="page-subtitle">Locked weeks only.</p>
                  </div>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={handleCloseLeaderboardTeam}
                    aria-label="Close team view"
                  >
                    X
                  </button>
                </div>
                <div className="modal-body">
                <div className="leaderboard-week-header">
                  <div className="week-nav leaderboard-team-nav">
                    <button
                      type="button"
                      onClick={goToLeaderboardPreviousWeek}
                      disabled={leaderboardViewWeekPosition <= 0}
                      aria-label="Previous week"
                    >
                      <span aria-hidden>{"<"}</span>
                    </button>
                    <span className="week-label">{leaderboardViewWeekLabel}</span>
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
                      <span aria-hidden>{">"}</span>
                    </button>
                  </div>
                  {leaderboardViewWeeks.length > 0 && (
                    <span className="group-metric leaderboard-week-points">
                      points: {leaderboardViewWeekPoints}
                    </span>
                  )}
                </div>
                  {leaderboardViewWeeks.length === 0 ? (
                    <p className="empty-note">No locked weeks yet.</p>
                  ) : (
                    <div className="leaderboard-team-groups">
                      {rosterGroups.map((group) => (
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
                                leaderboardViewTeam,
                                leaderboardViewWeekIndex
                              )
                            )}
                          </div>
                        </section>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeTab === "team" && (
            <section className="team-view">
            <header className="page-header team-header">
              <div className="team-header-info">
                <div className="meta-card deadline-card">
                  <span className="meta-label">Deadline in</span>
                  <span className="meta-value">{deadlineCountdown}</span>
                  <span className="meta-helper">{deadlineLabel}</span>
                </div>
                <p className="eyebrow">Big Brother Fantasy</p>
                <h1>{teamHeaderTitle}</h1>
                <p className="page-subtitle">{lineupLabel}</p>
              </div>
            </header>

              {transferError && <p className="notice">{transferError}</p>}
              {!authUser && (
                <p className="notice">
                  Sign in to save your team and appear on the leaderboard.
                </p>
              )}
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

              return (
                <section className="team-group" key={group.id}>
                  <div
                    className={`group-header ${group.id === "hoh" ? "has-controls" : ""}`}
                  >
                    <div className="group-info">
                      <h2>{group.title}</h2>
                      <p>{group.description}</p>
                    </div>
                    {group.id === "hoh" && (
                      <div className="group-controls">
                        <div className="week-nav">
                          <button
                            type="button"
                            onClick={goToPreviousWeek}
                            disabled={displayedWeekIndex <= minViewIndex}
                            aria-label="Previous week"
                          >
                            <span aria-hidden>{"<"}</span>
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
                            <span aria-hidden>{">"}</span>
                          </button>
                        </div>
                        <div className="group-controls-right">
                          <span
                            className={`group-metric ${
                              isEditable ? "transfer-metric" : ""
                            }`}
                          >
                            {isEditable
                              ? `transfers: ${transfersRemaining}`
                              : `points: ${displayedTeamPoints}`}
                          </span>
                          {!isPreseason && !isEditable && (
                            <button
                              type="button"
                              className="pick-button"
                              onClick={goToNextWeekPick}
                              disabled={!nextWeek || !authUser}
                            >
                              Pick for next week
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`slot-grid slot-grid--${group.id}`}>
                    {group.slots.map((slot) => renderSlotCard(slot))}
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
                          X
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
                <h1>Admin Panel</h1>
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
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
