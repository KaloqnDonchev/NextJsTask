import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "../../../resources/background.png";

export const StyledBackgroundImage = styled(({ ...props }) => <Image {...props} layout="fill" src={backgroundImg} width={350} height={600} />)`
  z-index: -1;
`;