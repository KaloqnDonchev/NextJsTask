import styled from "styled-components";
import { StyledBackgroundImage } from "../../components/Images/BackgroundImage/elements";

export const StyledImageAndBulletPoints = styled.div`
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledBulletPoints = styled((props) => <div {...props} />)``;