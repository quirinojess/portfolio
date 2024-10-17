import { ICONSTYPES } from "constants/icons";

type IconType = (typeof ICONSTYPES)[number];

export type TIcons = {
type: IconType;
color?: string;
fill?: string;
stroke?: string;
size?: string;
}

export type TIconsSvg = {
color?: string;
fill?: string;
stroke?: string;
size?: string;
}