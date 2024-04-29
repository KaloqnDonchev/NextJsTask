import React, { HTMLAttributes } from "react";
import { StyledImageAndBulletPoints } from "./elements";
import { BackgroundImage } from "../../../components/Images/BackgroundImage";
import { VideoImage } from "../../../components/Images/VideoImage";
import { BulletPoints } from "../BulletPoints/BulletPoints";

interface ImageAndBulletPointsProps extends HTMLAttributes<HTMLDivElement> {}

const ImageAndBulletPoints: React.FC<ImageAndBulletPointsProps> = () => {
  return <StyledImageAndBulletPoints>
    <BackgroundImage />
    <VideoImage />
    <BulletPoints />
  </StyledImageAndBulletPoints>;
};

export default ImageAndBulletPoints;