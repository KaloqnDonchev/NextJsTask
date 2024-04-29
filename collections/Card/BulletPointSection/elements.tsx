import styled, { StyledComponent } from "styled-components";
import { HTMLAttributes } from "react";

export const StyledBulletPointSection: StyledComponent<"div", any, HTMLAttributes<HTMLDivElement>> = styled.div`
    border-radius: 10px;
    background-color: #f0f0f0;
    margin: 20px;
    display: flex;
    border: 3px solid transparent;
    transition: border-color 0.3s ease;
    &:hover {
      border-color: #3892cf;
    }
`;