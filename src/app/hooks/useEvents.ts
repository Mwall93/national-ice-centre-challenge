import { useState, useEffect } from "react";
import { Event } from "../types/events.types";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const apiEndpoint = "/api/proxy";

    async function fetchEvents() {
      try {
        //  I couldn't get a caching implementation to work locally.
        //  I've used localStorage in the meantime as a similar solution
        //  Without the benefit of being a storage for multiple sessions
        // However, the usage of Redis / similar would be a similar implementation here
        const cachedEvents = localStorage.getItem("events");
        const events = cachedEvents
          ? (JSON.parse(cachedEvents) as Event[])
          : null;
        if (events) {
          setEvents(events);
        } else {
          const response = await fetch(apiEndpoint, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch events");
          }
          const data: Event[] = await response.json();
          localStorage.setItem("events", JSON.stringify(data));
          setEvents(data);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return { events, loading, error };
}
