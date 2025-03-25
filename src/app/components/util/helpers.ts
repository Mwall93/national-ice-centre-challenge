import { pascalCase } from "pascal-case";
import { Event } from "../../types/events.types";

export const getMonthOptions = (events: Event[]): string[] => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const allMonthOptions = events.map((event) => {
    const date = new Date(event.fields.date); // Parse the date string

    const month = monthNames[date.getMonth()]; // Get the month name
    const year = date.getFullYear(); // Get the year
    return `${month} ${year}`; // Combine into "Month Year"
  });

  // remove duplicates
  const monthOptions = [...new Set(allMonthOptions)];

  return monthOptions;
};

export const getUniqueGenres = (events: Event[]): string[] => {
  const allGenres = events.flatMap((event) => event.fields.genre);

  // remove duplicates
  const uniqueGenres = [...new Set(allGenres)];
  return uniqueGenres;
};

export const filterUniqueEvents = (events: Event[]): Event[] => {
  //Not sure if filtering by title is correct here
  const uniqueEvents = [
    ...new Map(events.map((event) => [event.fields.title, event])).values(),
  ];
  return uniqueEvents;
};

export const filterByCategory = (
  events: Event[],
  category: string
): Event[] => {
  const uniqueEvents = filterUniqueEvents(events);
  if (category === "All categories") return uniqueEvents;
  return uniqueEvents.filter((event) =>
    event.fields.genre.some((genre) =>
      pascalCase(genre).includes(pascalCase(category))
    )
  );
};

export const filterByDate = (events: Event[], date: string): Event[] => {
  const uniqueEvents = filterUniqueEvents(events);
  if (date === "All dates") return uniqueEvents;
  return uniqueEvents.filter((event) => {
    const eventDate = new Date(event.fields.date);
    const month = eventDate.toLocaleString("default", { month: "long" });
    const year = eventDate.getFullYear();
    return `${month} ${year}` === date;
  });
};

export const searchEvents = (events: Event[], search: string): Event[] => {
  const uniqueEvents = filterUniqueEvents(events);
  if (!search) return uniqueEvents;
  return uniqueEvents.filter((event) => {
    return event.fields.title.toLowerCase().includes(search.toLowerCase());
  });
};
