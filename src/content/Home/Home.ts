import { IHome } from "types/Home";


const HomeContent: IHome = {
 menu: [
  {
    id: 0, 
  path: "/",
   label: "Home",
  },
  {
    id: 1,
    path: "/projects",
     label: "Projects",
    },
 ],
 heading: {title: "Front End", subtitle: "Software Engineer", activeH1: true},
button: {label: "See All Projects", target:'/projects', ariaLabel: "See All Projects", ariaExpanded: false, ariaControls: "projects", type: "button"},
description:{text: "I am a Front End Software Engineer with a passion for creating beautiful and functional user interfaces. I have experience with React, Redux, and TypeScript, and I am always looking to learn new technologies."}
};

export { HomeContent };
