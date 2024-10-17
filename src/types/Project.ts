import { THeadingContent } from "./Heading";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type TProjectsPage = {
 headingProjects: THeadingContent;
};

export type TProjectsContext = {
 projects: TProject[] | null;
 setProjects: Dispatch<SetStateAction<TProject[] | null>>;
};

export type TProjectsProvider = {
 children: ReactNode;
};

export type TProject = {
 id: number;
 date: string;
 date_gmt: string;
 guid: {
  rendered: string;
 };
 modified: string;
 modified_gmt: string;
 slug: string;
 status: string;
 type: string;
 link: string;
 title: {
  rendered: string;
 };
 content: {
  rendered: string;
  protected: boolean;
 };
 excerpt: {
  rendered: string;
  protected: boolean;
 };
 author: number;
 featured_media: number;
 comment_status: string;
 ping_status: string;
 sticky: boolean;
 template: string;
 format: string;
 meta: {
  footnotes: string;
 };
 categories: number[];
 tags: any[];
 class_list: string[];
 fimg_url: string;
 _links: {
  self: Array<{ href: string }>;
  collection: Array<{ href: string }>;
  about: Array<{ href: string }>;
  author: Array<{ embeddable: boolean; href: string }>;
  replies: Array<{ embeddable: boolean; href: string }>;
  "version-history": Array<{ count: number; href: string }>;
  "predecessor-version": Array<{ id: number; href: string }>;
  "wp:featuredmedia": Array<{ embeddable: boolean; href: string }>;
  "wp:attachment": Array<{ href: string }>;
  "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>;
  curies: Array<{ name: string; href: string; templated: boolean }>;
  [key: string]: any;
 };
};
