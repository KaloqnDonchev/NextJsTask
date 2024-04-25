import React, { HTMLAttributes } from "react";
import { StyledImageAndBulletPoints } from "./elements";

interface ImageAndBulletPointsProps extends HTMLAttributes<HTMLDivElement> {}

const ImageAndBulletPoints: React.FC<ImageAndBulletPointsProps> = (props) => {
  return <StyledImageAndBulletPoints {...props} />;
};

export default ImageAndBulletPoints;