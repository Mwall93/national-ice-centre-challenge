import React from "react";
import {
  filterUniqueEvents,
  filterByDate,
  searchEvents,
  filterByCategory,
} from "../../components/util/helpers";
import { Event } from "../../types/events.types";

const events = [
  {
    id: "EPAN0000024Y",
    fields: {
      offsale_date: "2025-12-31T20:30:00Z",
      region_code: "GBR",
      is_ticket_exchange_enabled: "0",
      genre: ["Sport"],
      has_web_sales_dates: "1",
      keywords:
        "Nottingham Panthers v Manchester Storm Motorpoint Arena Ice Hockey",
      description:
        "Wednesday - 7.30pm Face Off    Get ready to cheer on the Nottingham Panthers and witness the intensity of top-tier ice hockey live! Don't miss out on the action – book your tickets now and be part of the electric atmosphere!",
      show_id: "5647",
      venue_timezone: "0.0",
      venue_name: "Motorpoint Arena",
      when: "Wed 26 Mar 2025",
      category_ids: ["10009"],
      venue_postcode: "NG1 1LA",
      use_when_dates: "True",
      publishing_level: "3",
      thumbnail: "sfx24780.jpg",
      venue_state: "Nottingham",
      large_image: "sfx24778.jpg",
      feature_image: "sfx24778.jpg",
      product_types: ["Performance"],
      venue_location: "52.952813,-1.139606",
      venue_code: "MAN",
      onsale_date: "2025-01-06T09:00:00Z",
      is_sold_out: "0",
      date: "2025-03-26",
      venue_address: "Bolero Square",
      purchase:
        "https://premier.ticketek.co.uk/events/PANM260325/venues/MAN/performances/EPAN0000024Y",
      allow_refund: "False",
      product_id: "EPAN0000024Y",
      content_ids: ["PANM260325"],
      title: "Nottingham Panthers v Manchester Storm",
      seller_info_datetime: "2024-03-01T09:00:00Z",
      is_retired: "0",
      content_id: "PANM260325",
    },
  },
  {
    id: "EPAS0000024Y",
    fields: {
      offsale_date: "2025-03-26T20:30:00Z",
      region_code: "GBR",
      is_ticket_exchange_enabled: "0",
      genre: ["Sport"],
      has_web_sales_dates: "1",
      keywords:
        "Nottingham Panthers v Manchester Storm Motorpoint Arena Ice Hockey",
      description:
        "Wednesday - 7.30pm Face Off    Get ready to cheer on the Nottingham Panthers and witness the intensity of top-tier ice hockey live! Don't miss out on the action – book your tickets now and be part of the electric atmosphere!",
      show_id: "5647",
      venue_timezone: "0.0",
      venue_name: "Motorpoint Arena",
      when: "Wed 26 Mar 2025 - Hospitality Suites",
      category_ids: ["10009"],
      venue_postcode: "NG1 1LA",
      use_when_dates: "True",
      publishing_level: "3",
      thumbnail: "sfx24780.jpg",
      venue_state: "Nottingham",
      large_image: "sfx24778.jpg",
      feature_image: "sfx24778.jpg",
      product_types: ["Performance"],
      venue_location: "52.952813,-1.139606",
      venue_code: "MAN",
      onsale_date: "2025-01-06T08:30:00Z",
      is_sold_out: "0",
      date: "2025-03-26",
      venue_address: "Bolero Square",
      purchase:
        "https://premier.ticketek.co.uk/events/PANM260325/venues/MAN/performances/EPAS0000024Y",
      allow_refund: "False",
      product_id: "EPAS0000024Y",
      content_ids: ["PANM260325"],
      title: "Nottingham Panthers v Manchester Storm",
      seller_info_datetime: "2024-03-01T09:00:00Z",
      is_retired: "0",
      content_id: "PANM260325",
    },
  },
  {
    id: "EMTP2025697BB",
    fields: {
      offsale_date: "2025-04-01T17:30:00Z",
      region_code: "GBR",
      description: "Michael Ball and Alfie Boe",
      is_ticket_exchange_enabled: "0",
      genre: ["Concerts", "User Preferences"],
      has_web_sales_dates: "1",
      keywords: "Michal Ball Alfie Boe Motorpoint Arena Nottingham",
      show_id: "5902",
      venue_timezone: "1.0",
      venue_name: "Motorpoint Arena",
      when: "Tue 1 Apr 2025",
      category_ids: ["2041,2048"],
      venue_postcode: "NG1 1LA",
      use_when_dates: "True",
      publishing_level: "3",
      thumbnail: "sfx25647.jpg",
      venue_state: "Nottingham",
      large_image: "sfx25643.jpg",
      feature_image: "sfx25643.jpg",
      product_types: ["Performance"],
      venue_location: "52.952813,-1.139606",
      venue_code: "MAN",
      onsale_date: "2024-09-10T09:00:00Z",
      is_sold_out: "0",
      date: "2025-03-01",
      venue_address: "Bolero Square",
      purchase:
        "https://premier.ticketek.co.uk/events/BABOMP25/venues/MAN/performances/EMTP2025697BB",
      allow_refund: "False",
      product_id: "EMTP2025697BB",
      content_ids: ["BABOMP25"],
      title: "Michael Ball and Alfie Boe",
      seller_info_datetime: "2023-01-01T10:00:00Z",
      is_retired: "0",
      content_id: "BABOMP25",
    },
  },
];

describe("filterByDate", () => {
  it("Should filter events by date", () => {
    const filteredEvents = filterByDate(events, "March 2025");
    expect(filteredEvents).toHaveLength(1);
    expect(filteredEvents[0].fields.title).toBe("Event 3");
  });
});
