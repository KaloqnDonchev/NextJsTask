import styled from "styled-components";
import Image, { ImageProps } from "next/image";
import { StyledBackgroundImage } from "../../components/Images/BackgroundImage/elements";
import videoImg from "../../resources/video.png";


export const StyledImageAndBulletPoints = styled.div`
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledImage = styled(() => <Image src={videoImg} width={350} height={600} />)`
    margin-left: 50px;
`;

export const StyledBulletPoints = styled(() => <div />)``;