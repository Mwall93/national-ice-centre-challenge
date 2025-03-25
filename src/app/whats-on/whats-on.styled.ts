import styled from "styled-components";
import { rem } from "polished";

export const StyledSelect = styled.select`
    width: 100%;
    padding: ${rem(20)};
    border-radius: ${rem(24)};
    border: none;
    margin: ${rem(4)};
    font-weight: 600;
    font-size: ${rem(15)};
    color: #666;
    background-color: #f9f9f9;
}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${rem(20)};
  border-radius: ${rem(24)};
  border: none;
  margin: ${rem(5)};
  font-weight: 600;
  font-size: ${rem(15)};
  color: #666;
  background-color: #f9f9f9;
`;

export const FilterContainer = styled.div`
  width: 100%;
  padding: ${rem(48)} ${rem(24)};
  background-color: #004996;
  margin-bottom: ${rem(10)};
`;

export const EventTitle = styled.h2`
  font-size: ${rem(24)};
`;

export const EventContent = styled.div`
  font-size: ${rem(16)};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const EventContainer = styled.div`
  padding: ${rem(20)};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 90%;
  margin-left: 5%;
  margin-bottom: ${rem(10)};
`;

export const TicketButton = styled.button`
  background-color: #d2430f;
  border-radius: ${rem(24)};
  padding: ${rem(10)};
  font-size: ${rem(20)};
  max-height: ${rem(50)};
`;

export const StyledThumbnail = styled.img`
  max-width: 350px;
  max-height: 350px;
  @media (min-width: 768px) {
    max-width: 200px;
    max-height: 200px;
  }
`;
