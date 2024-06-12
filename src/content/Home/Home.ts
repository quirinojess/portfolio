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
  {id: '0', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png', linkDescription: 'View Certificate'},
  {id: '1', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png' ,linkDescription: 'View Certificate'},
  {id: '2', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png', linkDescription: 'View Certificate'},
  {id: '3', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png', linkDescription: 'View Certificate'},
  {id: '4', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png', linkDescription: 'View Certificate'},
  {id: '5', title: 'React', description: 'React Certified Developer', link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/65584/feecaa53d0ed09f9795dd83d13109f5e/certificado.png', linkDescription: 'View Certificate'},
],
skills: [{id:'1', text: 'React', isHighlighted: true}, {id:'2', text: 'Redux'}, {id:'3', text: 'TypeScript'}, {id:'4', text: 'JavaScript'}, {id:'5', text: 'HTML', isHighlighted: true}, {id:'6', text: 'CSS', isHighlighted: true}, {id:'7', text: 'SASS'}, {id:'8', text: 'Styled Components', isHighlighted: true}, {id:'9', text: 'Material UI'}, {id:'10', text: 'Bootstrap'}, {id:'11', text: 'Jest'}, {id:'12', text: 'React Testing Library'}, {id:'13', text: 'Cypress'}
],
experience:[{
  title: "Senior Developer",
  company: "Tech Company",
  description: "Worked on developing and maintaining web applications.",
date:"2021-2022"

},
{
  title: "Mid-level Developer",
  company: "Another Tech Company",
  description: "Contributed to backend services and API development.",
date:"2022-2023"
}]
};

export { HomeContent };
