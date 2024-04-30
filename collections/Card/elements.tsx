import styled, { StyledComponent } from "styled-components";
import { HTMLAttributes } from "react";

export const StyledCard: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  @media (max-width: 1024px) {
    margin: 0 50px;
  }
  display: flex;
  justify-content: center;
  align-content: center;
  border: 3px solid transparent;
  border-radius: 10px;
  background-color: #f5f2f2;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #3892cf;
    h4 {
      color: blue;
      text-decoration: underline;
    }
  }
`;

export const StyledCardText: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  @media (max-width: 1024px) {
    padding: 5px 20px 5px 5px;
  }
  padding: 10px 50px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const StyledIcon: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  @media (max-width: 1024px) {
    padding: 20px;
  }
  padding: 30px;
  display: flex;
  align-items: center;
`;
