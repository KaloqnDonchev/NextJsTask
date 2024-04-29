import styled, { StyledComponent } from "styled-components";
import { HTMLAttributes } from "react";

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
    margin-left: 50px;
`;

export const StyledIcon: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    margin-left: 35px;
    margin-top: 35px;
`;