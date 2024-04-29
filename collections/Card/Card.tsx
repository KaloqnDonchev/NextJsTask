import React, { HTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import { StyledCard, StyledIcon, StyledCardText } from "./elements";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading";
import { SectionParagraph } from "../../components/Typography/SectionParagraph";
import { Card as CardType } from "./types";

type CardProps = HTMLAttributes<HTMLDivElement> & CardType;

const Card: React.FC<CardProps> = ({ icon, title, text, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledIcon>
        <Image src={icon} width={80} height={80} alt={title} />
      </StyledIcon>

      <StyledCardText>
        <SectionInnerHeading>{title}</SectionInnerHeading>

        <SectionParagraph>{text}</SectionParagraph>
      </StyledCardText>
    </StyledCard>
  );
};

export default Card;
