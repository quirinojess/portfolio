export interface ISocial{
content: ISocialContent;
}

export interface ISocialContent extends Array<{
id: string;
name: 'github' | 'linkedin' | 'codepen';
url: string;
}> {}