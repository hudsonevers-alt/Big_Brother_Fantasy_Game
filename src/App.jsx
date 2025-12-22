const hohRoom = [
  { name: "Alyssa", status: "Great social week" },
  { name: "Marcus", status: "Won veto" },
  { name: "Janelle", status: "Safe +1 vote" }
];

const block = [
  { name: "Tori", status: "On the block" },
  { name: "Devon", status: "Targeted" }
];

const leaderboard = [
  { name: "Team Pineapple", points: 118 },
  { name: "HOH Heroes", points: 109 },
  { name: "Backdoor Bandits", points: 102 }
];

const leagues = [
  { name: "Live Feeds League", members: 14 },
  { name: "Family Draft", members: 8 }
];

const players = [
  { name: "Alyssa Rivers", role: "Strategist" },
  { name: "Marcus Cole", role: "Competitor" },
  { name: "Janelle Cruz", role: "Social" },
  { name: "Tori James", role: "Wildcard" },
  { name: "Devon Lee", role: "Wildcard" }
];

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Big Brother Fantasy</p>
          <h1>Build your weekly roster before the HOH comp.</h1>
          <p className="subhead">
            Lock-in closes 1 hour before the HOH competition. Picks are hidden
            until the lock-in hits.
          </p>
        </div>
        <div className="hero-card">
          <div>
            <p className="label">Week 4 lock-in</p>
            <h2>Friday • 7:00 PM ET</h2>
          </div>
          <div className="status">
            <span className="dot" aria-hidden="true" />
            Picks open
          </div>
          <button type="button">Finalize picks</button>
        </div>
      </header>

      <section className="grid">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>HOH Room</h3>
              <p>Pick 3 players who will thrive this week.</p>
            </div>
            <span className="pill">Transfers left: 1</span>
          </div>
          <div className="player-list">
            {hohRoom.map((player) => (
              <div className="player" key={player.name}>
                <div>
                  <p className="player-name">{player.name}</p>
                  <p className="player-status">{player.status}</p>
                </div>
                <button type="button">Swap</button>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="card-header">
            <div>
              <h3>The Block</h3>
              <p>Pick 2 players who will struggle this week.</p>
            </div>
            <span className="pill muted">Unlimited transfers</span>
          </div>
          <div className="player-list">
            {block.map((player) => (
              <div className="player" key={player.name}>
                <div>
                  <p className="player-name">{player.name}</p>
                  <p className="player-status">{player.status}</p>
                </div>
                <button type="button" className="danger">
                  Swap
                </button>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Public leaderboard</h3>
              <p>See how you stack up across the season.</p>
            </div>
            <button type="button" className="ghost">
              View all
            </button>
          </div>
          <ol className="leaderboard">
            {leaderboard.map((entry, index) => (
              <li key={entry.name}>
                <span className="rank">#{index + 1}</span>
                <span className="entry-name">{entry.name}</span>
                <span className="points">{entry.points} pts</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="card">
          <div className="card-header">
            <div>
              <h3>Private leagues</h3>
              <p>Create invite-only groups for friends.</p>
            </div>
            <button type="button" className="ghost">
              Create league
            </button>
          </div>
          <div className="league-list">
            {leagues.map((league) => (
              <div className="league" key={league.name}>
                <div>
                  <p className="player-name">{league.name}</p>
                  <p className="player-status">{league.members} members</p>
                </div>
                <button type="button">Invite</button>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Admin: houseguest manager</h3>
            <p>Add or update houseguests with a photo and role tag.</p>
          </div>
          <button type="button" className="ghost">
            Upload CSV
          </button>
        </div>
        <div className="admin-grid">
          <form className="admin-form">
            <label>
              Houseguest name
              <input type="text" placeholder="e.g. Taylor Hale" />
            </label>
            <label>
              Role tag
              <input type="text" placeholder="Competitor, Social, Strategist" />
            </label>
            <label>
              Photo URL
              <input type="url" placeholder="https://" />
            </label>
            <button type="button">Add houseguest</button>
          </form>
          <div className="admin-list">
            {players.map((player) => (
              <div className="admin-player" key={player.name}>
                <div className="avatar" aria-hidden="true">
                  {player.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="player-name">{player.name}</p>
                  <p className="player-status">{player.role}</p>
                </div>
                <button type="button" className="ghost">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
