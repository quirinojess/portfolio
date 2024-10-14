export interface IParagraph {
 content: IParagraphContent;
 proportion: IParagraphProportions;
 isPost?: boolean;
}

export type IParagraphProportions =
 | "full"
 | "threeFourths"
 | "half"
 | "oneFourth";

export interface IParagraphContent {
 text?: string;
 rendered?: string;
}
