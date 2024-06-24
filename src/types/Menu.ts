
export interface IMenu {
content: IMenuContent;
}

export interface IMenuContent extends Array<{
    id: string;
    path: string;
    label: string;
    scrollTarget?: boolean;
  }>  {}

  export interface IMenuItem {
    id: string;
    path: string;
    label: string;
    scrollTarget?: boolean;
  }