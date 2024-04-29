import styled, { StyledComponent } from "styled-components";
import { HTMLAttributes } from "react";

export const StyledImageAndBulletPoints: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 120%;
    }
    @media (max-width: 560px) {
        padding-left: 50px;
    }
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
`;
