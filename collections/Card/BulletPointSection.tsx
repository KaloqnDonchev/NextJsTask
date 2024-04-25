import React, { HTMLAttributes } from "react";
import { StyledBulletPointSection } from "./elements";

interface BulletPointSectionProps extends HTMLAttributes<HTMLDivElement> {}

const BulletPointSection: React.FC<BulletPointSectionProps> = (props) => {
  return <StyledBulletPointSection {...props} />;
};

export default BulletPointSection;