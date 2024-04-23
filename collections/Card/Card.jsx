import { SectionHeading } from "../../components/Typography/SectionHeading";
import { SectionSubheading } from "../../components/Typography/SectionSubheading";
import { ImageAndBulletPoints } from "./ImageAndBulletPoints";
import { VideoImage } from "./VideoImage";
import { BackgroundImage } from "./BackgroundImage";
import { BulletPoints } from "./BulletPoints";

export const Card = () => {
    return (
        <>
            <SectionHeading>Managed agency selection</SectionHeading>
            <SectionSubheading>Strengthen your onboarding process</SectionSubheading>
            <ImageAndBulletPoints>
                <BackgroundImage />
                <VideoImage />
                <BulletPoints>sssss </BulletPoints>
            </ImageAndBulletPoints>
        </>
    );
  };