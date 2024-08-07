
export interface IMenu {
content: IMenuContent;
}

export interface IMenuContent extends Array<{
    id: string;
    path: string;
    scroll?: string;
    label: string;
  }>  {}

  export interface IMenuItem {
    id: string;
    path: string;    
    scroll?: string;
    label: string;
  }