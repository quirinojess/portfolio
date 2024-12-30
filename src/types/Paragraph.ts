export type TParagraph = {
 content: TParagraphContent;
 proportion: TParagraphProportions;
 isPost?: boolean;
}

export type TParagraphProportions =
 | "full"
 | "threeFourths"
 | "half"
 | "oneFourth";

export type TParagraphContent = {
 text?: string;
 rendered?: string;
}
