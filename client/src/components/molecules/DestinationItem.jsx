import { NavigationIcon, TrashIcon } from "../../lib/icons.jsx";
import styles from "./DestinationItem.module.css";

/**
 * DestinationItem — molecule
 * Props: name, notes, status, onUpdateStatus, onRemove
 */
const STATUS_OPTIONS = [
  { value: "next", label: "Next" },
  { value: "otw", label: "OTW" },
  { value: "done", label: "Done" },
];

export default function DestinationItem({ name, notes, address, status, onUpdateStatus, onStartNavigation, onRemove }) {
  return (
    <div className={styles.row}>
      <div className={styles.text}>
        <div className={styles.nameLine}>
          <div className={`${styles.name} ${status === "done" ? styles.done : ""}`}>{name}</div>
          {status === "done" && <span className={styles.doneBadge}>Completed</span>}
        </div>
        {address && address !== notes && <div className={styles.address}>{address}</div>}
        {notes && <div className={styles.notes}>{notes}</div>}
      </div>
      <label className={styles.statusWrap}>
        <span className={styles.statusLabel}>Status</span>
        <select
          className={styles.statusSelect}
          value={status}
          onChange={(e) => onUpdateStatus(e.target.value)}
          aria-label={`Status for ${name}`}
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.start} type="button" onClick={onStartNavigation} aria-label={`Open directions to ${name}`}>
        <NavigationIcon size={13} />
        <span>Map</span>
      </button>
      <button className={styles.remove} onClick={onRemove} aria-label={`Remove ${name}`}>
        <TrashIcon size={15} />
      </button>
    </div>
  );
}
