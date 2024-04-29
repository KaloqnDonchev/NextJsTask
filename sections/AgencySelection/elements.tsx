import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "../../components/Typography";

export const StyledSectionHeading = styled((props) => <SectionHeading {...props} />)`
    @media (max-width: 1024px) {
        width: 120%;
    }
    @media (max-width: 560px) {
        padding-left: 50px;
    }
    margin-bottom: 0;
    text-align: center;
`;

export const StyledSectionSubheading = styled((props) => <SectionSubheading {...props} />)`
    @media (max-width: 1024px) {
        width: 120%;
    }
    @media (max-width: 560px) {
        padding-left: 50px;
        }
    margin-top: 0;
    margin-bottom: 60px;
    text-align: center;
`;