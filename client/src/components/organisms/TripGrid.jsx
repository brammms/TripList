import { useNavigate } from "react-router-dom";
import TripCard from "../molecules/TripCard.jsx";
import Button from "../atoms/Button.jsx";
import { CompassIcon, PlusIcon } from "../../lib/icons.jsx";
import { isTripFinished } from "../../lib/tripStatus.js";
import styles from "./TripGrid.module.css";

/**
 * TripGrid — organism
 * Props: trips (array), onNewTrip
 */
export default function TripGrid({ trips, onNewTrip, emptyTitle = "No trips yet", emptyMessage = "Start with a name and a date range — you can add destinations and activities once the trip is created.", emptyActionLabel = "Plan your first trip" }) {
  const navigate = useNavigate();

  if (trips.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>
          <CompassIcon size={26} />
        </div>
        <h3>{emptyTitle}</h3>
        <p>{emptyMessage}</p>
        {onNewTrip && (
          <Button variant="primary" onClick={onNewTrip}>
            <PlusIcon size={16} />
            <span>{emptyActionLabel}</span>
          </Button>
        )}
      </div>
    );
  }

  const sorted = [...trips].sort((a, b) => (a.start || "").localeCompare(b.start || ""));

  return (
    <div className={styles.grid}>
      {sorted.map((trip) => {
        const destinations = trip.destinations || [];
        return (
          <TripCard
            key={trip.id}
            name={trip.name}
            startDate={trip.start}
            endDate={trip.end}
            destinationCount={destinations.length}
            destinationsDone={destinations.filter((d) => (d.status || (d.done ? "done" : "next")) === "done").length}
            finished={isTripFinished(trip)}
            onClick={() => navigate(`/trips/${trip.id}`)}
          />
        );
      })}
    </div>
  );
}
