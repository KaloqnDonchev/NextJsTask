import { SectionHeading } from "../../components/Typography/SectionHeading";
import { SectionSubheading } from "../../components/Typography/SectionSubheading";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading";
import { SectionParagraph } from "../../components/Typography/SectionParagraph";
import { ImageAndBulletPoints } from "./ImageAndBulletPoints";
import { VideoImage } from "./VideoImage";
import { BackgroundImage } from "./BackgroundImage";
import { BulletPoints } from "./BulletPoints";

export const Card = (props) => {
    return (
        <>
            <SectionHeading>Managed agency selection</SectionHeading>
            <SectionSubheading>Strengthen your onboarding process</SectionSubheading>
            <ImageAndBulletPoints>
                <BackgroundImage />
                <VideoImage />
                <BulletPoints>
                    {props.bulletPointsProps.map((bulletPoint) => (
                        <div>
                            <SectionInnerHeading>{bulletPoint.title}</SectionInnerHeading>
                            <SectionParagraph>{bulletPoint.text}</SectionParagraph>
                        </div>
                    ))}
                </BulletPoints>
            </ImageAndBulletPoints>
        </>
    );
  };