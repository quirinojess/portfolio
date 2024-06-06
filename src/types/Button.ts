
export interface IButton {
    content: IButtonContent;
    onClick?: () => void;
    onKeyDown?: () => void;
   }
   
   
   export interface IButtonContent{
    label: string;
    target: string;
    ariaLabel: string;
    ariaExpanded: boolean;
    ariaControls: string;
    type: 'button' | 'submit' | 'reset' | undefined;
}
   