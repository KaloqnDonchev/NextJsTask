import styled from "styled-components";
import Image from "next/image";
import portraitImage from "../../../resources/video.png";

export const StyledImage = styled(({ ...props }) => <Image {...props} src={portraitImage} width={350} height={560} />)`
    @media (max-width: 1024px) {
        padding-bottom: 90px;
    }
    max-width: 100%;
`;