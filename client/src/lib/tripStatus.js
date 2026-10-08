export function isTripFinished(trip) {
  if (trip?.finished === true) return true;
  if (trip?.finished === false) return false;

  const destinations = trip?.destinations || [];
  return destinations.length > 0 && destinations.every((destination) =>
    (destination.status || (destination.done ? "done" : "next")) === "done",
  );
}

export function getNextStop(trips) {
  const orderedTrips = [...trips].sort((first, second) => (first.start || "").localeCompare(second.start || ""));

  for (const trip of orderedTrips) {
    const destinations = trip.destinations || [];
    const statusOf = (destination) => destination.status || (destination.done ? "done" : "next");
    const destination = destinations.find((place) => statusOf(place) === "otw")
      || destinations.find((place) => statusOf(place) === "next");

    if (destination) return { trip, destination, status: statusOf(destination) };
  }

  return null;
}