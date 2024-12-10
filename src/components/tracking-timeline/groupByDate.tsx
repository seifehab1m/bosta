import { TrackingEvent } from "./TimelineTypes";

export const groupByDate = (events: TrackingEvent[]) => {
  const grouped: Record<string, TrackingEvent[]> = {};

  events.forEach((event) => {
    const date = new Date(event.timestamp).toLocaleDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(event);
  });

  return grouped;
};
