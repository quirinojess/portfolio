

export interface IMenu extends Array<{
    id: string;
    path: string;
    label: string;
    scrollTarget?: boolean;
  }> {}