import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "../../resources/background.png";
import videoImg from "../../resources/video.png";

export const StyledBackgroundImage = styled(({ ...props }) => <Image {...props} layout="fill" src={backgroundImg} width={350} height={600} />)`
  z-index: -1;
`;

export const StyledImageAndBulletPoints = styled.div`
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledImage = styled(({ ...props }) => <Image {...props} src={videoImg} width={350} height={600} />)`
    margin-left: 50px;
`;

export const StyledBulletPoints = styled(({ ...props }) => <div {...props} />)``;