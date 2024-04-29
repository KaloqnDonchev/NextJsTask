import { StaticImageData } from "next/image";

export interface Card {
    icon: StaticImageData;
    title: string;
    text: React.ReactElement;
  }