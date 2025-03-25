import { pascalCase } from "pascal-case";
import React from "react";
import {
  FilterContainer,
  StyledInput,
  StyledSelect,
} from "../whats-on/whats-on.styled";

export function Filter({
  genres,
  monthOptions,
  searchEvents,
  filterByCategory,
  filterByDate,
}: {
  genres: string[];
  monthOptions: string[];
  searchEvents: (category: string) => void;
  filterByCategory: (category: string) => void;
  filterByDate: (category: string) => void;
}) {
  return (
    <FilterContainer>
      <StyledSelect
        title="Filter events by category"
        onChange={(e) => {
          filterByCategory(e.target.value);
        }}
      >
        <option selected disabled>
          Filter events by category
        </option>
        <option key={"all"}>All categories</option>
        {genres.map((genre: string) => {
          return <option key={genre}>{pascalCase(genre)}</option>;
        })}
      </StyledSelect>
      <StyledSelect
        onChange={(e) => {
          filterByDate(e.target.value);
        }}
      >
        <option selected disabled>
          Filter events by month
        </option>
        <option key={"all"}>All dates</option>
        {monthOptions.map((month: string) => {
          return <option key={month}>{month}</option>;
        })}
      </StyledSelect>
      <StyledInput
        placeholder="Search events"
        onChange={(e) => {
          searchEvents(e.target.value);
        }}
      />
    </FilterContainer>
  );
}
