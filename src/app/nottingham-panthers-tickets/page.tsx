"use client";
import React, { useEffect, useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventCard } from "../components/event-card";
import { Event } from "../types/events.types";
import { filterUniqueEvents, searchEvents } from "../components/util/helpers";

export default function Page() {
  const { events, loading, error } = useEvents();
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    setFilteredEvents(
      searchEvents(filterUniqueEvents(events), "Nottingham Panthers")
    );
  }, [events]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <title>Nottingham Panthers Tickets - Motorpoint Arena Nottingham</title>
      {filteredEvents.map((event) => {
        return <EventCard key={event.id} {...event} />;
      })}
    </>
  );
}
