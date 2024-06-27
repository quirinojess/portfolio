import { ICONSTYPES } from "constants/icons";

type IconType = (typeof ICONSTYPES)[number];

export interface IIcons {
type: IconType;
color?: string;
fill?: string;
stroke?: string;
size?: string;
}

export interface IIconsSvg {
color?: string;
fill?: string;
stroke?: string;
size?: string;
}