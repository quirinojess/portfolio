import { TButtonContent } from "./Button";
import { TFigure } from "./Figure";

export type TCard = {
 content: TCardContent;
}

export type TCardProportions = "full" | "threeFourths" | "half" | "oneFourth";

export type TCardContent = {
 id: number;
 image: TFigure;
 title: string;
 button: TButtonContent;
}