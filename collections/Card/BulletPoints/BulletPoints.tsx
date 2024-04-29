import React, { useState } from "react";
import Image from 'next/image';

import icon1 from "../../../resources/Icons/icon1.png";
import icon2 from "../../../resources/Icons/icon2.png";
import icon3 from "../../../resources/Icons/icon3.png";
import { StyledBulletPoints, StyledIcon } from "./elements";
import BulletPointSection from "../BulletPointSection/BulletPointSection";
import BulletPointText from "../BulletPointText/BulletPointText";
import { SectionInnerHeading } from "../../../components/Typography/SectionInnerHeading"
import { SectionParagraph } from "../../../components/Typography/SectionParagraph";

interface BulletPoint {
  title: string;
  text: string;
  icon: any;
}

export const BulletPoints: React.FC = () => {
  const [hoveredSections, setHoveredSections] = useState<boolean[]>([false, false, false]);

  const handleHover = (index: number) => {
    setHoveredSections(prevState => prevState.map((state, i) => i === index));
  };

  const handleMouseLeave = () => {
    setHoveredSections(prevState => prevState.map(() => false));
  };

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
        {bulletPoints.map((bulletPoint, index) => (
          <BulletPointSection 
            key={bulletPoint.title}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
            style={{ width: `${500 + index * 25}px` }}
          >
            <StyledIcon>
              <Image src={bulletPoint.icon} width={80} height={80} alt={bulletPoint.title}/>
            </StyledIcon>
            <BulletPointText>
                <SectionInnerHeading style={{ 
                    color: hoveredSections[index] ? 'blue' : 'inherit', 
                    textDecoration: hoveredSections[index] ? 'underline' : 'none',
                    fontWeight: 'bold'
                  }}>
                  {bulletPoint.title}
                </SectionInnerHeading>
                <SectionParagraph dangerouslySetInnerHTML={{ __html: bulletPoint.text }} />
            </BulletPointText>
          </BulletPointSection>
        ))}
      </StyledBulletPoints>
  );
};
