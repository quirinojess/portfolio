import { IHome } from "types/Home";


const HomeContent: IHome = {
 menu: [
  {
 id: '1', 
  path: "/",
  label: "Home",
  },
 ],
 heading: {title: "Front End", subtitle: "Software Engineer", activeH1: true},
button: {label: "See All Projects", target:'https://github.com/quirinojess', ariaLabel: "See All Projects", ariaExpanded: false, ariaControls: "projects", type: "button"},
description:{text: "I am a SEO front-end engineer who believes in user experience-driven development with a focus on problem-solving. With over 7 years of experience in the field, I design code that prioritizes simplicity while building robust and scalable applications. Welcome to my portfolio, where you will find a glimpse into my journey, certifications, and work."},
certifieds: [
  {id: '1', title: 'Azure Fundamentals Certified', description: 'AZ-900', link: 'assets/certificates/az-900.png', linkDescription: 'View Certificate'},
  {id: '2', title: 'Post Graduate in Multiplatform Mobile Application Projects', description: 'DESCOMPLICA', link: 'assets/certificates/descomplica-multiplataform.png' ,linkDescription: 'View Certificate'},
  {id: '3', title: 'Mastertech in Technology Systems Projects', description: 'DESCOMPLICA', link: 'assets/certificates/descomplica-projects.png', linkDescription: 'View Certificate'},
  {id: '4', title: 'DevOps & Agile Culture', description: 'FIAP', link:  'assets/certificates/fiap-agile.png', linkDescription: 'View Certificate'},
  {id: '5', title: 'Cloud Fundamentals, Admnistration and Solutions Architect', description: 'FIAP', link: 'assets/certificates/fiap-cloud.png', linkDescription: 'View Certificate'},
  {id: '6', title: 'Services Architecture, API and Mobile Architecture', description: 'FIAP', link: 'assets/certificates/fiap-api.png', linkDescription: 'View Certificate'},
  {id: '7', title: 'Design Thinking', description: 'ECHOOS', link: 'assets/certificates/echoos-design.png', linkDescription: 'View Certificate'},
  {id: '8', title: 'IA Fundamentals for devs', description: 'SANTANDER UNIVERSITY', link: 'assets/certificates/santander-ia.png', linkDescription: 'View Certificate'},],
skills: [

  { id: '6', text: 'HTML5', isHighlighted: true },
  { id: '7', text: 'CSS3', isHighlighted: true },
  { id: '2', text: 'JavaScript', isHighlighted: true },
  { id: '1', text: 'React', isHighlighted: true },
  { id: '11', text: 'VueJs' },
  { id: '3', text: 'TypeScript' },
  { id: '4', text: 'PHP' },
  { id: '5', text: 'Wordpress', isHighlighted: true },
  { id: '11', text: 'WooCommerce' },
  { id: '8', text: 'SASS' },
  { id: '9', text: 'Styled Components', isHighlighted: true },
  { id: '10', text: 'Material UI' },
  { id: '11', text: 'Bootstrap' },
  { id: '12', text: 'Tailwind CSS', isHighlighted: true },
  { id: '11', text: 'Chakra UI', isHighlighted: true },
  { id: '13', text: 'Jest' },
  { id: '14', text: 'React Testing Library' },
  { id: '15', text: 'GitFlow', isHighlighted: true },
  { id: '16', text: 'Trunk based', isHighlighted: true  },
  { id: '17', text: 'MYSQL' },
  { id: '18', text: 'Docker' },
  { id: '19', text: 'DevOps' },
  { id: '20', text: 'Jenkins' },
  { id: '21', text: 'CI/CD' },
  { id: '21', text: 'Azure' },
  { id: '21', text: 'API REST' },
  { id: '22', text: 'SCRUM & Agile', isHighlighted: true },
  { id: '23', text: 'Design Thinking', isHighlighted: true },
  { id: '24', text: 'ADOBE CC', isHighlighted: true },
  { id: '21', text: 'UX/UI', isHighlighted: true },
],
experience:[{
  id: '1',
  title: "Front end Developer",
  company: "QRNO",
  description: "I delivered hundreds of websites, ecommerces, landing pages and blogs in marketing agencys and to small entrepreneurs. Large experience with Wordpress, SEO optimization, performance and marketing fundamentals.",
date:"2016-2021"

},{  id: '2',
  title: "Front End Software Engineer",
  company: "AVANADE",
  description: "I integrated two teams to development medical systems projects in the healthcare area. Large experience with agile software development, backend integration, typescript and reactjs development.",
date:"2021-2023"

},
{  id: '3',
  title: "SEO Front End Engineer",
  company: "HOSTGATOR",
  description: "I work in the marketing area in the improvement and development of new products. Focused on SEO optimization and experience with Nextjs and Wordpress.",
date:"2024"
}],
social: [{id: '1', name: 'github', url: 'https://github.com/quirinojess'}, 
  {id: '2', name: 'linkedin', url: 'https://www.linkedin.com/in/quirinojess/'}, 
  {id: '3', name: 'codepen', url: 'https://codepen.io/jess-quirino'}
],
};

export { HomeContent };
