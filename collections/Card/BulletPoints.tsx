import React from "react";
import Image from 'next/image';

import icon1 from "../../resources/Icons/icon1.png";
import icon2 from "../../resources/Icons/icon2.png";
import icon3 from "../../resources/Icons/icon3.png";
import { StyledBulletPoints, StyledIcon } from "./elements";
import BulletPointSection from "./BulletPointSection";
import BulletPointText from "./BulletPointText";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading"
import { SectionParagraph } from "../../components/Typography/SectionParagraph";

interface BulletPoint {
  title: string;
  text: string;
  icon: StaticImageData;
}

export const BulletPoints: React.FC = () => {
  const bulletPoints: BulletPoint[] = [
    {
        title: 'Brief',
        text: `Complete <strong> brief writing or simple guidance </strong> on what to include, we've got you covered.`,
        icon: icon1
    },
    {
        title: 'Search',
        text: 'In-depth agency search covering; <strong> criteria matching </strong>, door knocking and due-dilligence vetting.',
        icon: icon2
    },
    {
        title: 'Pitch',
        text: 'Comprehensive <strong> pitch management </strong>, including comms, diary management and pitch hosting.',
        icon: icon3
    },
];

  return (
      <StyledBulletPoints>
        {bulletPoints.map((bulletPoint) => (
          <BulletPointSection key={bulletPoint.title}>
            <StyledIcon>
              <Image src={bulletPoint.icon} alt={bulletPoint.title}/>
            </StyledIcon>
            <BulletPointText>
                <SectionInnerHeading>{bulletPoint.title}</SectionInnerHeading>
                <SectionParagraph dangerouslySetInnerHTML={{ __html: bulletPoint.text }} />
            </BulletPointText>
          </BulletPointSection>
        ))}
      </StyledBulletPoints>
  );
};