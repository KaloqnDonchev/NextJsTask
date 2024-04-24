import styled from "styled-components";
import Image from "next/image";
import { StyledBackgroundImage } from "../../components/Images/BackgroundImage/elements";}
import videoImg from "../../resources/video.png";

export const StyledImageAndBulletPoints = styled.div`
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledImage = styled(({ ...props }) => <Image {...props} src={videoImg} width={350} height={600} />)`
    margin-left: 50px;
`;

export const StyledBulletPoints = styled(({ ...bulletPointsProps }) => <div {...bulletPointsProps} />)``;