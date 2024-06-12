import { IButtonContent } from "./Button";
import { IHeading } from "./Heading";
import { IListContent } from "./List";
import { IMarqueeContent } from "./Marquee";
import { IMenu } from "./Menu";
import { IParagraphContent } from "./Paragraph";


export interface IHome{
    menu: IMenu;
    heading: IHeading;
    button: IButtonContent;
    description: IParagraphContent;
    certifieds: IListContent
    skills: IMarqueeContent
     }
     