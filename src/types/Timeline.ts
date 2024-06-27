export interface ITimeline {
content: ITimelineContent
}

export interface ITimelineContent extends Array<{
id: string;
title: string;
company: string;
description: string;
date: string; 
}> {}