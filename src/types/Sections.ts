
export interface ISections{
children: React.ReactNode;
flex: ISectionsFlex;
justify: ISectionsJustify;
align: ISectionsAlign;
id: string;
}
   
export type ISectionsFlex = 'row' | 'column';
export type ISectionsJustify = 'start' | 'end' | 'space-between' | 'space-around';
export type ISectionsAlign = 'start' | 'end' | 'center';
     