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
description:{text: "I am a Front End Software Engineer with a passion for creating beautiful and functional user interfaces. I have experience with React, Redux, and TypeScript, and I am always looking to learn new technologies."},
certifieds: [
  {id: '0', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b', linkDescription: 'View Certificate'},
  {id: '1', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b' ,linkDescription: 'View Certificate'},
  {id: '2', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b', linkDescription: 'View Certificate'},
  {id: '3', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b', linkDescription: 'View Certificate'},
  {id: '4', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b', linkDescription: 'View Certificate'},
  {id: '5', title: 'React', description: 'React Certified Developer', link: 'https://www.credential.net/1b3b3b7e-4b7b-4b3b-8b3b-7b3b3b7b3b3b', linkDescription: 'View Certificate'},
]};

export { HomeContent };
