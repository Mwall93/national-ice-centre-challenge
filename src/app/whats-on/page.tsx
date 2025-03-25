"use client";
import React, { useEffect, useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventCard } from "../components/event-card";
import { Filter } from "../components/filter";
import { Event } from "../types/events.types";
import {
  filterByCategory,
  filterByDate,
  filterUniqueEvents,
  getMonthOptions,
  getUniqueGenres,
  searchEvents,
} from "../components/util/helpers";

export default function Page() {
  const { events, loading, error } = useEvents();
  const [monthOptions, setMonthOptions] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    setMonthOptions(getMonthOptions(events));
    setGenres(getUniqueGenres(events));
    setFilteredEvents(filterUniqueEvents(events));
  }, [events]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <title>Whats on - Motorpoint Arena Nottingham</title>
      <Filter
        monthOptions={monthOptions}
        genres={genres}
        searchEvents={(searchTerm) =>
          setFilteredEvents(searchEvents(events, searchTerm))
        }
        filterByCategory={(category) =>
          setFilteredEvents(filterByCategory(events, category))
        }
        filterByDate={(date) => setFilteredEvents(filterByDate(events, date))}
      />
      {filteredEvents.map((event) => {
        return <EventCard key={event.id} {...event} />;
      })}
    </>
  );
}
