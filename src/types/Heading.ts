export type THeading = {
content: THeadingContent;
activeH1?: boolean;
 }
 
 export type THeadingContent = {
  title: string;
  subtitle: string;
 }

 export type THeadings = {
   title: string;
   type: 'h1' | 'h2' | 'h3' | 'h4';
 }