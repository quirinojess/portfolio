
export type TMarquee ={
content: TMarqueeContent;
}

export type TMarqueeContent = Array<{
id: string;
text: string;
isHighlighted?: boolean;
  }> ;