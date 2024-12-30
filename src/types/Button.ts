
export type TButton = {
    content: TButtonContent;
    onClick?: () => void;
    onKeyDown?: () => void;
    variant?: TButtonVariant;
    paramType?: string;
}

export type TButtonVariant = 'primary' | 'secondary';


export type TButtonContent = {
    label: string;
    target: string;
    ariaLabel: string;
    ariaExpanded: boolean;
    ariaControls: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    scrollTo?: string;
    isExternal?: boolean;
    variant?: TButtonVariant;
}

