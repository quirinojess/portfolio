
export interface IList{
content:IListContent;
isLink?:boolean;
isModal?:boolean;
}

export interface IListContent extends Array<{
id: string;
title: string;
description:string;
link: string;
linkDescription: string;
}> {}