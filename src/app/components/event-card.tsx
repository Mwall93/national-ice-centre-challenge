import React from "react";
import { Event } from "../types/events.types";
import {
  EventContainer,
  EventContent,
  EventTitle,
  StyledThumbnail,
  TicketButton,
} from "../whats-on/whats-on.styled";

export const EventCard = (event: Event) => {
  if (!event) return null;
  return (
    <EventContainer>
      <EventTitle>{event.fields.title}</EventTitle>
      <EventContent>
        <StyledThumbnail
          src={`https://d2gloyfobyb8yo.cloudfront.net/dbimages/${event.fields.thumbnail}`}
          alt={event.fields.title}
        />
        {event.fields.when.split("-")[0]}
        {/* TODO: Add ticket url? */}
        <TicketButton>Tickets & Info</TicketButton>
      </EventContent>
    </EventContainer>
  );
};
