import { IButtonContent } from "./Button";
import { IFigure } from "./Figure";

export interface ICard{
content: ICardContent;
 }

 export type ICardProportions = 'full' | 'threeFourths' | 'half' | 'oneFourth';

export interface ICardContent{
image: IFigure;
title: string; 
button: IButtonContent;
 }