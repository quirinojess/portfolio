
export type TSections ={
children: React.ReactNode;
flex: TSectionsFlex;
justify: TSectionsJustify;
align: TSectionsAlign;
id?: string;
isVisible?: boolean;
key?: number | string;
}
   
export type TSectionsFlex = 'row' | 'column';
export type TSectionsJustify = 'start' | 'end' | 'space-between' | 'space-around';
export type TSectionsAlign = 'start' | 'end' | 'center';
     