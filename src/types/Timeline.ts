export type TTimeline = {
content: TTimelineContent
}

export type TTimelineContent = Array<{
id: string;
title: string;
company: string;
description: string;
date: string; 
}>;