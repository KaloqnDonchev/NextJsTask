import React, { HTMLAttributes } from "react";
import { StyledBulletPointText } from "./elements";

interface BulletPointTextProps extends HTMLAttributes<HTMLDivElement> {}

const BulletPointText: React.FC<BulletPointTextProps> = (props) => {
  return <StyledBulletPointText {...props} />;
};

export default BulletPointText;