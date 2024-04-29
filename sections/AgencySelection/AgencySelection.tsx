import React from "react";

import { StyledSectionHeading, StyledSectionSubheading } from "./elements";
import ImageAndBulletPoints from "../../collections/Card/ImageAndBulletPoints/ImageAndBulletPoints";

export const AgencySelection: React.FC = () => {
    return (
        <>
            <StyledSectionHeading>Managed agency selection</StyledSectionHeading>
            <StyledSectionSubheading>Strengthen your onboarding process</StyledSectionSubheading>
            <ImageAndBulletPoints />
        </>
    );
  };