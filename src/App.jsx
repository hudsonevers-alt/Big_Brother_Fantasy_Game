import { useEffect, useMemo, useState } from "react";

const players = [
  { id: "alyssa", name: "Alyssa Rivers", role: "Strategist" },
  { id: "marcus", name: "Marcus Cole", role: "Competitor" },
  { id: "janelle", name: "Janelle Cruz", role: "Social" },
  { id: "tori", name: "Tori James", role: "Wildcard" },
  { id: "devon", name: "Devon Lee", role: "Wildcard" },
  { id: "cam", name: "Camila Ortiz", role: "Social" },
  { id: "reese", name: "Reese Turner", role: "Strategist" }
];

const rosterSlots = [
  {
    id: "hoh-1",
    group: "HOH Room",
    label: "HOH Slot 1",
    detail: "Thrives this week"
  },
  {
    id: "hoh-2",
    group: "HOH Room",
    label: "HOH Slot 2",
    detail: "Thrives this week"
  },
  {
    id: "hoh-3",
    group: "HOH Room",
    label: "HOH Slot 3",
    detail: "Thrives this week"
  },
  {
    id: "block-1",
    group: "The Block",
    label: "Block Slot 1",
    detail: "Struggles this week"
  },
  {
    id: "block-2",
    group: "The Block",
    label: "Block Slot 2",
    detail: "Struggles this week"
  }
];

const createEmptyTeam = () =>
  rosterSlots.reduce((acc, slot) => ({ ...acc, [slot.id]: "" }), {});

const buildWeeks = (startDate, count) => {
  const weeks = [];
  const base = new Date(startDate);
  for (let i = 0; i < count; i += 1) {
    const deadline = new Date(base);
    deadline.setDate(base.getDate() + i * 7);
    weeks.push({ id: i + 1, name: `Week ${i + 1}`, deadline });
  }
  return weeks;
};

const formatDeadline = (date) =>
  date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });

const getWeekIndex = (now, weeks) => {
  let index = 0;
  weeks.forEach((week, i) => {
    if (now >= week.deadline) {
      index = i + 1;
    }
  });
  return index;
};

const getPlayerById = (id) => players.find((player) => player.id === id);

const isTeamComplete = (team) =>
  rosterSlots.every((slot) => Boolean(team[slot.id]));

const countTransfers = (currentTeam, nextTeam) =>
  rosterSlots.reduce(
    (count, slot) =>
      currentTeam?.[slot.id] !== nextTeam?.[slot.id] ? count + 1 : count,
    0
  );

function App() {
  const [view, setView] = useState("active");
  const [draftTeam, setDraftTeam] = useState(createEmptyTeam);
  const [pendingTeam, setPendingTeam] = useState(createEmptyTeam);
  const [activeTeam, setActiveTeam] = useState(createEmptyTeam);
  const [nextWeekTeam, setNextWeekTeam] = useState(createEmptyTeam);
  const [activationWeekIndex, setActivationWeekIndex] = useState(null);
  const [activeWeekIndex, setActiveWeekIndex] = useState(null);
  const [teamSavedAtWeekIndex, setTeamSavedAtWeekIndex] = useState(null);
  const [processedWeekIndex, setProcessedWeekIndex] = useState(0);
  const [transferCount, setTransferCount] = useState(0);
  const [transferError, setTransferError] = useState("");

  const now = useMemo(() => new Date(), []);
  const weeks = useMemo(
    () => buildWeeks(new Date(now.getTime() + 1000 * 60 * 60 * 24 * 2), 10),
    [now]
  );
  const calendarWeekIndex = useMemo(() => getWeekIndex(now, weeks), [now, weeks]);

  const hasSavedTeam = activationWeekIndex !== null;
  const hasActiveTeam = activeWeekIndex !== null;
  const nextWeekIndex = hasActiveTeam
    ? activeWeekIndex + 1
    : activationWeekIndex;
  const activeWeek = hasActiveTeam ? weeks[activeWeekIndex - 1] : null;
  const nextWeek = nextWeekIndex ? weeks[nextWeekIndex - 1] : null;

  const effectiveNextTeam = hasActiveTeam ? nextWeekTeam : pendingTeam;
  const transfersUsed = hasActiveTeam
    ? countTransfers(activeTeam, nextWeekTeam)
    : 0;
  const transfersRemaining = Math.max(0, transferCount - transfersUsed);

  useEffect(() => {
    if (calendarWeekIndex <= processedWeekIndex) {
      return;
    }

    let newProcessedWeek = processedWeekIndex;
    let newActiveWeekIndex = activeWeekIndex;
    let newActiveTeam = activeTeam;
    let newNextWeekTeam = nextWeekTeam;
    let newTransferCount = transferCount;

    for (
      let week = processedWeekIndex + 1;
      week <= calendarWeekIndex;
      week += 1
    ) {
      newProcessedWeek = week;
      const eligible = activationWeekIndex !== null && week >= activationWeekIndex;
      if (!eligible) {
        continue;
      }

      if (newActiveWeekIndex === null || week > newActiveWeekIndex) {
        const teamToActivate =
          newActiveWeekIndex === null ? pendingTeam : newNextWeekTeam;
        newActiveWeekIndex = week;
        newActiveTeam = teamToActivate;
        newNextWeekTeam = teamToActivate;
      }

      if (teamSavedAtWeekIndex !== null && teamSavedAtWeekIndex < week) {
        newTransferCount = Math.min(2, newTransferCount + 1);
      }
    }

    if (newProcessedWeek !== processedWeekIndex) {
      setProcessedWeekIndex(newProcessedWeek);
      setActiveWeekIndex(newActiveWeekIndex);
      setActiveTeam(newActiveTeam);
      setNextWeekTeam(newNextWeekTeam);
      setTransferCount(newTransferCount);
    }
  }, [
    activationWeekIndex,
    activeTeam,
    activeWeekIndex,
    calendarWeekIndex,
    nextWeekTeam,
    pendingTeam,
    processedWeekIndex,
    teamSavedAtWeekIndex,
    transferCount
  ]);

  const handleDraftChange = (slotId, playerId) => {
    setDraftTeam((prev) => ({ ...prev, [slotId]: playerId }));
  };

  const handleSaveTeam = () => {
    if (!isTeamComplete(draftTeam)) {
      return;
    }
    setPendingTeam(draftTeam);
    setActivationWeekIndex(calendarWeekIndex + 1);
    setTeamSavedAtWeekIndex(calendarWeekIndex);
    setView("next");
  };

  const handleNextTeamChange = (slotId, playerId) => {
    setTransferError("");
    if (!hasActiveTeam) {
      setPendingTeam((prev) => ({ ...prev, [slotId]: playerId }));
      return;
    }

    const updated = { ...nextWeekTeam, [slotId]: playerId };
    const updatedTransfers = countTransfers(activeTeam, updated);
    if (updatedTransfers > transferCount) {
      setTransferError(
        "You have used all available transfers. Remove a change to swap again."
      );
      return;
    }
    setNextWeekTeam(updated);
  };

  const renderSlot = (slot, team, onChange, disabled) => {
    const selectedIds = rosterSlots
      .filter((item) => item.id !== slot.id)
      .map((item) => team[item.id])
      .filter(Boolean);

    return (
      <div className="slot" key={slot.id}>
        <div>
          <p className="player-name">{slot.label}</p>
          <p className="player-status">{slot.detail}</p>
        </div>
        <select
          value={team[slot.id]}
          onChange={(event) => onChange(slot.id, event.target.value)}
          disabled={disabled}
        >
          <option value="">Select a houseguest</option>
          {players.map((player) => (
            <option
              key={player.id}
              value={player.id}
              disabled={selectedIds.includes(player.id)}
            >
              {player.name} · {player.role}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderTeamSummary = (team) =>
    rosterSlots.map((slot) => {
      const player = getPlayerById(team[slot.id]);
      return (
        <div className="player" key={slot.id}>
          <div>
            <p className="player-name">{slot.label}</p>
            <p className="player-status">
              {player ? player.name : "Slot unassigned"}
            </p>
          </div>
          <span className="pill muted">{slot.group}</span>
        </div>
      );
    });

  const pastWeeks = useMemo(() => {
    if (!hasActiveTeam) {
      return [];
    }
    const start = activationWeekIndex ?? activeWeekIndex;
    if (activeWeekIndex <= start) {
      return [];
    }
    return weeks.slice(start - 1, activeWeekIndex - 1);
  }, [activationWeekIndex, activeWeekIndex, hasActiveTeam, weeks]);

  if (!hasSavedTeam) {
    return (
      <div className="app">
        <header className="hero">
          <div>
            <p className="eyebrow">Big Brother Fantasy</p>
            <h1>Create your team</h1>
            <p className="subhead">
              Fill every slot before the Week 1 deadline to lock in your first
              roster.
            </p>
          </div>
          <div className="hero-card">
            <div>
              <p className="label">Week 1 deadline</p>
              <h2>{weeks[0] ? formatDeadline(weeks[0].deadline) : "TBD"}</h2>
            </div>
            <div className="status">
              <span className="dot" aria-hidden="true" />
              Preseason open
            </div>
            <button type="button" disabled={!isTeamComplete(draftTeam)} onClick={handleSaveTeam}>
              Save your team
            </button>
          </div>
        </header>

        <section className="card">
          <div className="card-header">
            <div>
              <h3>Preseason roster builder</h3>
              <p>Choose a unique houseguest for every slot.</p>
            </div>
            <span className="pill">Unlimited changes</span>
          </div>
          <div className="slot-list">
            {rosterSlots.map((slot) =>
              renderSlot(slot, draftTeam, handleDraftChange, false)
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Big Brother Fantasy</p>
          <h1>
            {hasActiveTeam
              ? `Week ${activeWeekIndex} lineup`
              : "Team saved"}
          </h1>
          <p className="subhead">
            {hasActiveTeam
              ? "Active teams are locked for the current week."
              : `Your team goes live in Week ${activationWeekIndex}.`}
          </p>
        </div>
        <div className="hero-card">
          <div>
            <p className="label">Next deadline</p>
            <h2>{nextWeek ? formatDeadline(nextWeek.deadline) : "TBD"}</h2>
          </div>
          <div className="status">
            <span className="dot" aria-hidden="true" />
            Transfers open for {nextWeek ? nextWeek.name : "next week"}
          </div>
          <button type="button" onClick={() => setView("next")}>Go to next week</button>
        </div>
      </header>

      <section className="grid">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>{hasActiveTeam ? `Active team · Week ${activeWeekIndex}` : "Upcoming team"}</h3>
              <p>
                {hasActiveTeam
                  ? "Locked in for the current week."
                  : "This lineup will become active once the next deadline hits."}
              </p>
            </div>
            <span className="pill muted">
              {hasActiveTeam
                ? `Deadline: ${activeWeek ? formatDeadline(activeWeek.deadline) : "TBD"}`
                : `Goes live Week ${activationWeekIndex}`}
            </span>
          </div>
          <div className="player-list">
            {renderTeamSummary(hasActiveTeam ? activeTeam : pendingTeam)}
          </div>
        </article>

        {pastWeeks.length > 0 && (
          <article className="card">
            <div className="card-header">
              <div>
                <h3>Past weeks</h3>
                <p>Review results from weeks you played.</p>
              </div>
            </div>
            <ol className="leaderboard">
              {pastWeeks.map((week) => (
                <li key={week.id}>
                  <span className="rank">{week.name}</span>
                  <span className="entry-name">0 pts</span>
                  <span className="points">View recap</span>
                </li>
              ))}
            </ol>
          </article>
        )}
      </section>

      {view === "next" && nextWeek && (
        <section className="card">
          <div className="card-header">
            <div>
              <h3>Next week transfers · {nextWeek.name}</h3>
              <p>Make changes before the deadline. Active team stays locked.</p>
            </div>
            <span className="pill">
              {hasActiveTeam
                ? `Transfers left: ${transfersRemaining}`
                : "Unlimited changes"}
            </span>
          </div>
          <div className="slot-list">
            {rosterSlots.map((slot) =>
              renderSlot(slot, effectiveNextTeam, handleNextTeamChange, false)
            )}
          </div>
          {transferError && <p className="notice">{transferError}</p>}
          <div className="transfer-footer">
            <button type="button" className="ghost" onClick={() => setView("active")}>
              Back to active week
            </button>
            <span className="helper">
              Changes are saved automatically until the deadline.
            </span>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
