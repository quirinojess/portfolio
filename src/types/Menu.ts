
export type TMenu = {
content: TMenuContent;
}

export type TMenuContent = Array<{
    id: string;
    path: string;
    scroll?: string;
    label: string;
  }> ;

  export type TMenuItem = {
    id: string;
    path: string;    
    scroll?: string;
    label: string;
  }