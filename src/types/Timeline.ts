export interface ITimeline {
content: ITimelineContent
}

export interface ITimelineContent extends Array<{
title: string;
company: string;
description: string;
date: string; 
}> {}