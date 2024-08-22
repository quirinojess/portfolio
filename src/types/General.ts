import { IBackButtonContent } from "./Button";
import { IMarqueeContent } from "./Marquee";
import { IMenuContent } from "./Menu";
import { ISocialContent } from "./Social";



export interface IGeneral{
menu: IMenuContent;
skills: IMarqueeContent;
social: ISocialContent;
backButton:IBackButtonContent; 
}
