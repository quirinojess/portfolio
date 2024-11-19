import { TButtonContent } from "./Button";
import { TFigure } from "./Figure";
import { THeadingContent } from "./Heading";
import { TListContent } from "./List";
import { TParagraphContent } from "./Paragraph";
import { TTimelineContent } from "./Timeline";


export type THome  ={
headingHome: THeadingContent;
button: TButtonContent;
description: TParagraphContent;
certifieds: TListContent
experience: TTimelineContent
headingAbout: THeadingContent;
descriptionAbout: TParagraphContent;
headingRead: THeadingContent;
readList: {id: string, img: TFigure, description: TParagraphContent; button: TButtonContent}[];
}
