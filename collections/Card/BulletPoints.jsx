import { StyledBulletPoints } from "./elements";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading"
import { SectionParagraph } from "../../components/Typography/SectionParagraph";

export const BulletPoints = ({ ...props }) => {
  const bulletPoints = [
    {
        title: 'Brief',
        text: `Complete brief writing or simple guidance on what to include, we've got you covered.`
    },
    {
        title: 'Search',
        text: 'In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.'
    },
    {
        title: 'Pitch',
        text: 'Comprehensive pitch management, including comms, diary management and pitch hosting.'
    },
];

  return (
    <StyledBulletPoints>
      {bulletPoints.map((bulletPoint) => (
        <div>
            <SectionInnerHeading>{bulletPoint.title}</SectionInnerHeading>
            <SectionParagraph>{bulletPoint.text}</SectionParagraph>
        </div>
      ))}
    </StyledBulletPoints>
  );
};