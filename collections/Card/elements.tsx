import styled, { StyledComponent } from "styled-components";
import { HTMLAttributes } from "react";
import { StyledBackgroundImage } from "../../components/Images/BackgroundImage/elements";

interface StyledImageAndBulletPointsProps extends HTMLAttributes<HTMLDivElement> {}

export const StyledImageAndBulletPoints: StyledComponent<"div", any, StyledImageAndBulletPointsProps> = styled.div`
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    background-image: url(${StyledBackgroundImage});
    position: relative;
    display: flex;
    justify-content: center;
`;

export const StyledBulletPoints: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-left: 50px;
`;

export const StyledBulletPointSection: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    border-radius: 10px;
    background-color: #f0f0f0;
    margin: 20px;
    display: flex;
`;

export const StyledBulletPointText: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    width: 310px;
    margin-left: 50px;
`;

export const StyledIcon: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    margin-left: 35px;
    margin-top: 35px;
`;
