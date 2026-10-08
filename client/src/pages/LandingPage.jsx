import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button.jsx";
import styles from "./LandingPage.module.css";

function formatTripDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatTripRange(start, end) {
  if (!start && !end) return "Plan your weekend";
  if (!start) return end;
  if (!end) return formatTripDate(start);
  return `${formatTripDate(start)} – ${formatTripDate(end)}`;
}

export default function LandingPage({ trips = [] }) {
  const navigate = useNavigate();
  const featuredTrip = [...trips].sort((a, b) => (b.start || "").localeCompare(a.start || ""))[0] || {
    id: "demo-trip",
    name: "Clark weekend",
    start: "2026-11-12",
    end: "2026-11-17",
    destinations: [
      { name: "Marquee Mall" },
      { name: "Holy Rosary Parish" },
      { name: "Sisig stop" },
    ],
  };

  const destinations = featuredTrip.destinations || [];
  const doneCount = destinations.filter((destination) => (destination.status || (destination.done ? "done" : "next")) === "done").length;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>✦</span>
          <span>TripList</span>
        </div>
      </header>

      <main className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.badge}>Angeles City · Pampanga</span>
          <h1>Turn a good weekend into a great plan.</h1>
          <p>
            Save your favorite spots, make room for food stops, and keep your trip moving
            without losing the mood of the day.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" onClick={() => navigate("/planner")}>
              Let’s start
            </Button>
            <Button variant="ghost" onClick={() => navigate("/planner")}>
              Browse trips
            </Button>
          </div>

          <ul className={styles.features}>
            <li>Plan places and dates</li>
            <li>Track what’s next and done</li>
            <li>Keep local food ideas close</li>
          </ul>
        </div>

        <div className={styles.preview} aria-label="TripList dashboard preview">
          <div className={styles.previewHeader}>
            <span>Where to next?</span>
            <button type="button" onClick={() => navigate("/planner")}>New trip</button>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.previewMeta}>Current trip</div>
            <h2>{featuredTrip.name}</h2>
            <div className={styles.previewDates}>{formatTripRange(featuredTrip.start, featuredTrip.end)}</div>
            <div className={styles.previewList}>
              {(destinations.length ? destinations : [
                { name: "Marquee Mall" },
                { name: "Holy Rosary Parish" },
                { name: "Sisig stop" },
              ]).slice(0, 3).map((destination) => (
                <div key={`${featuredTrip.id}-${destination.name}`}><span className={styles.dot} /> {destination.name}</div>
              ))}
            </div>
          </div>

          <div className={styles.previewStats}>
            <div>
              <strong>{destinations.length}</strong>
              <span>places</span>
            </div>
            <div>
              <strong>{doneCount}</strong>
              <span>done</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
