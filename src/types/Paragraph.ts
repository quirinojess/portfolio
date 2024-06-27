
export interface IParagraph{
content: IParagraphContent;
proportion: IParagraphProportions ;
}
   
export type IParagraphProportions = 'full' | 'threeFourths' | 'half' | 'oneFourth';
     
export interface IParagraphContent{
text: string;  
 }
         