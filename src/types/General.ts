import { TButtonContent } from "./Button";
import { TMarqueeContent } from "./Marquee";
import { TMenuContent } from "./Menu";
import { TSocialContent } from "./Social";



export type TGeneral ={
menu: TMenuContent;
skills: TMarqueeContent;
social: TSocialContent;
buttons : {backButton: TButtonContent,reloadButton: TButtonContent}; 
}
