import styled, { StyledComponent } from "styled-components";
import { SectionHeading, SectionSubheading } from "../../components/Typography";
import { HTMLAttributes } from "react";

export const StyledSectionHeading = styled((props) => (
  <SectionHeading {...props} />
))`
  margin-bottom: 0;
  text-align: center;
`;

export const StyledSectionSubheading = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0;
  margin-bottom: 60px;
  text-align: center;
`;

export const StyledColumn: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  max-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 950px;
  margin: 0 auto 70px auto;
  gap: 40px;
`;

export const BackgroundImage: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  background: url("/img/background.png") round;
  @media (max-width: 1024px) {
    height: 500px;
  }
  background-position: -55px top;
  background-size: cover;
`;

export const StyledCardsWrapper: StyledComponent<
  "div",
  any,
  HTMLAttributes<HTMLDivElement>
> = styled.div`
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 40px 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  gap: 40px;
`;
