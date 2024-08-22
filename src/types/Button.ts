
export interface IButton {
    content: IButtonContent;
    onClick?: () => void;
    onKeyDown?: () => void;
    variant?: IButtonVariant; 
   }
   
   export type IButtonVariant =  'primary' | 'secondary'; 
   
   
   export interface IButtonContent{
    label: string;
    target: string;
    ariaLabel: string;
    ariaExpanded: boolean;
    ariaControls: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    scrollTo?: string;
    isExternal?: boolean;    
    variant?: IButtonVariant; 
}
