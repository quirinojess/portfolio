
export type TSections ={
children: React.ReactNode;
flex: TSectionsFlex;
justify: TSectionsJustify;
align: TSectionsAlign;
id?: string;
isVisible?: boolean;
key?: number | string;
}
   
export type TSectionsFlex = 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'alternate';
export type TSectionsJustify = 'start' | 'end' | 'space-between' | 'space-around' | 'center' ;
export type TSectionsAlign = 'start' | 'end' | 'center';
     