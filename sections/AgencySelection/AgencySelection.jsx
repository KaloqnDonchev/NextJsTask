import { SectionHeading } from "../../components/Typography/SectionHeading";
import { SectionSubheading } from "../../components/Typography/SectionSubheading";
import { ImageAndBulletPoints } from "../../collections/Card/ImageAndBulletPoints";
import { VideoImage } from "../../components/Images/VideoImage";
import { BackgroundImage } from "../../components/Images/BackgroundImage";
import { BulletPoints } from "../../collections/Card/BulletPoints";

export const AgencySelection = (props) => {
    const centeredHeading = {
        textAlign: "center",
    }

    return (
        <>
            <SectionHeading>Managed agency selection</SectionHeading>
            <SectionSubheading>Strengthen your onboarding process</SectionSubheading>
            <ImageAndBulletPoints>
                <BackgroundImage />
                <VideoImage />
                <BulletPoints />
            </ImageAndBulletPoints>
        </>
    );
  };