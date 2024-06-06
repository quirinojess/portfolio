import { IHome } from "@/types/Home";


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
};

export { HomeContent };
