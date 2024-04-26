import styled from "styled-components";
import Image from "next/image";
import videoImg from "../../../resources/video.png";

export const StyledImage = styled(({ ...props }) => <Image {...props} src={videoImg} width={400} height={600} />)`
    @media (max-width: 1024px) {
        padding-bottom: 90px;
    }
`;