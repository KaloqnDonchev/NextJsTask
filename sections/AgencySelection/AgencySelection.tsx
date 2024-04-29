import React from "react";

import {
  StyledColumn,
  StyledSectionHeading,
  StyledSectionSubheading,
  StyledCardsWrapper,
  BackgroundImage,
} from "./elements";
import icon1 from "../../resources/Icons/icon1.png";
import icon2 from "../../resources/Icons/icon2.png";
import icon3 from "../../resources/Icons/icon3.png";
import { Card as CardType } from "../../collections/Card/types";
import { PortraitImage } from "../../components/Images/PortraitImage/PortraitImage";
import Card from "../../collections/Card/Card";

const cards: CardType[] = [
  {
    title: "Brief",
    text: (
      <>
        Complete <strong> brief writing or simple guidance </strong> on what to
        include, we've got you covered.
      </>
    ),
    icon: icon1,
  },
  {
    title: "Search",
    text: (
      <>
        In-depth agency search covering; <strong> criteria matching </strong>,
        door knocking and due-dilligence vetting
      </>
    ),
    icon: icon2,
  },
  {
    title: "Pitch",
    text: (
      <>
        Comprehensive <strong> pitch management </strong>, including comms,
        diary management and pitch hosting
      </>
    ),
    icon: icon3,
  },
];

export const AgencySelection: React.FC = () => {
  return (
    <>
      <StyledSectionHeading>Managed agency selection</StyledSectionHeading>
      <StyledSectionSubheading>
        Strengthen your onboarding process
      </StyledSectionSubheading>
      <BackgroundImage>
        <StyledColumn>
          <PortraitImage />
          <StyledCardsWrapper>
            {cards.map((card) => (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </StyledCardsWrapper>
        </StyledColumn>
      </BackgroundImage>
    </>
  );
};
