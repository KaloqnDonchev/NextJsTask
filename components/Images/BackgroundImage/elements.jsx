import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "../../../resources/background.png";

export const StyledBackgroundImage = styled(({ ...props }) => <Image {...props} fill src={backgroundImg} />)`
  z-index: -1;
`;