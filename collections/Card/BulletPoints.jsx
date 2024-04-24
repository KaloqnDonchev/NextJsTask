import Image from 'next/image';

import icon1 from "../../resources/Icons/icon1.png";
import icon2 from "../../resources/Icons/icon2.png";
import icon3 from "../../resources/Icons/icon3.png";
import { StyledBulletPoints } from "./elements";
import { BulletPointSection } from "./BulletPointSection";
import { BulletPointText } from "./BulletPointText";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading"
import { SectionParagraph } from "../../components/Typography/SectionParagraph";

export const BulletPoints = () => {
  const bulletPoints = [
    {
        title: 'Brief',
        text: `Complete brief writing or simple guidance on what to include, we've got you covered.`,
        icon: icon1
    },
    {
        title: 'Search',
        text: 'In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.',
        icon: icon2
    },
    {
        title: 'Pitch',
        text: 'Comprehensive pitch management, including comms, diary management and pitch hosting.',
        icon: icon3
    },
];

  return (
      <StyledBulletPoints>
        {bulletPoints.map((bulletPoint) => (
          <BulletPointSection> 
            <Image src={bulletPoint.icon} width={130} height={130}/>
            <BulletPointText>
                <SectionInnerHeading>{bulletPoint.title}</SectionInnerHeading>
                <SectionParagraph>{bulletPoint.text}</SectionParagraph>
            </BulletPointText>
          </BulletPointSection>
        ))}
      </StyledBulletPoints>
  );
};