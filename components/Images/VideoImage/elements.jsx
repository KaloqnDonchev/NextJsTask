import styled from "styled-components";
import Image from "next/image";
import videoImg from "../../../resources/video.png";

export const StyledImage = styled(({ ...props }) => <Image {...props} src={videoImg} width={350} height={600} />)`
    margin-left: 50px;
`;