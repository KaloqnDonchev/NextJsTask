import styled from "styled-components";
import { StyledBackgroundImage } from "../../components/Images/BackgroundImage/elements";

export const StyledImageAndBulletPoints = styled.div`
    @media (max-width: 1024px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledBulletPoints = styled((props) => <div {...props} />)`
    @media (max-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-left: 50px;
`;

export const StyledBulletPointSection = styled((props) => <div {...props} />)`
    border-radius: 10px;
    background-color: #f0f0f0;
    margin: 20px;
    display: flex;
`;

export const StyledBulletPointText = styled((props) => <div {...props} />)`
    width: 290px;
    margin-left: 50px;
`;