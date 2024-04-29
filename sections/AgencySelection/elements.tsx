import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "../../components/Typography";

export const StyledSectionHeading = styled((props) => <SectionHeading {...props} />)`
    margin-bottom: 0;
    text-align: center;
`;

export const StyledSectionSubheading = styled((props) => <SectionSubheading {...props} />)`
    margin-top: 0;
    margin-bottom: 60px;
    text-align: center;
`;