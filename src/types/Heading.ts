export interface IHeading {
content: IHeadingContent;
activeH1?: boolean;
 }
 
 export interface IHeadingContent {
  title: string;
  subtitle: string;
 }

 export interface IHeadings {
   title: string;
   type: 'h1' | 'h2' | 'h3' | 'h4';
 }