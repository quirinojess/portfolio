export type TSocial ={
content: TSocialContent;
}

export type TSocialContent =  Array<{
id: string;
name: 'github' | 'linkedin' | 'codepen' | string;
url: string;
}>;