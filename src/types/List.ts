
export type TList ={
content:TListContent;
isLink?:boolean;
isModal?:boolean;
}

export type TListContent =Array  < {
id: string;
title: string;
description:string;
link: string;
linkDescription: string;
}>;

export type TListItem ={
    id: string;
    title: string;
    description:string;
    link: string;
    linkDescription: string;
    }