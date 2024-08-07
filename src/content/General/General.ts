import { IGeneral } from "types/General";


const GeneralContent: IGeneral = {
menu: [
  {
    id: '1', 
    path: "/",
    scroll: "home-about",
    label: "About",
    },  
    {
      id: '2',   
      path: "/",
      scroll: "home-experience",
      label: "Experience",
      },
      {
        id: '3',   
        path: "/",
        scroll: "home-certifieds",
        label: "Certifieds",

        },
        {
          id: '4',   
          path: "/projects",
          label: "Projects",
          },
        {
          id: '5',   
          path: "/",
          scroll: "home-read",
          label: "Read",
          },
 ],
skills: [
  { id: '1', text: 'React', isHighlighted: true },
  { id: '2', text: 'JavaScript', isHighlighted: true },
  { id: '3', text: 'TypeScript' },
  { id: '4', text: 'PHP' },
  { id: '5', text: 'Wordpress', isHighlighted: true },
  { id: '6', text: 'HTML5', isHighlighted: true },
  { id: '7', text: 'CSS3', isHighlighted: true },
  { id: '8', text: 'SASS' },
  { id: '9', text: 'Styled Components', isHighlighted: true },
  { id: '10', text: 'Material UI' },
  { id: '11', text: 'VueJs' },
  { id: '12', text: 'Tailwind CSS', isHighlighted: true },
  { id: '13', text: 'Jest' },
  { id: '14', text: 'React Testing Library' },
  { id: '15', text: 'GitFlow', isHighlighted: true },
  { id: '16', text: 'Trunk based', isHighlighted: true },
  { id: '17', text: 'MYSQL' },
  { id: '18', text: 'Docker' },
  { id: '19', text: 'DevOps' },
  { id: '20', text: 'Jenkins' },
  { id: '21', text: 'CI/CD' },
  { id: '22', text: 'SCRUM & Agile', isHighlighted: true },
  { id: '23', text: 'Design Thinking', isHighlighted: true },
  { id: '24', text: 'ADOBE CC', isHighlighted: true },
  { id: '25', text: 'UX/UI', isHighlighted: true },
  { id: '26', text: 'Azure' },
  { id: '27', text: 'API REST' },
  { id: '28', text: 'Bootstrap' },
],
social: [{id: '1', name: 'github', url: 'https://github.com/quirinojess'}, 
  {id: '2', name: 'linkedin', url: 'https://www.linkedin.com/in/quirinojess/'}, 
  {id: '3', name: 'codepen', url: 'https://codepen.io/jess-quirino'}
],
};

export { GeneralContent };
