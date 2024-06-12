
export interface IMarquee{
content: IMarqueeContent;

}

export interface IMarqueeContent extends Array<{
id: string;
text: string;
isHighlighted?: boolean;
  }> {}