import { IButtonContent } from "./Button";
import { IHeadingContent } from "./Heading";
import { IListContent } from "./List";
import { IParagraphContent } from "./Paragraph";
import { ITimelineContent } from "./Timeline";


export interface IHome{
headingHome: IHeadingContent;
button: IButtonContent;
description: IParagraphContent;
certifieds: IListContent
experience: ITimelineContent
headingAbout: IHeadingContent;
headingRead: IHeadingContent;
descriptionRead: IParagraphContent;
buttonRead: IButtonContent;
}
