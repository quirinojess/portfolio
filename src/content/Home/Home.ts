import { THome } from "types/Home";


const HomeContent: THome = {
headingHome: {title: "Front End", subtitle: "Software Engineer"},
button: {label: "See All Projects", target:'https://github.com/quirinojess?tab=repositories', ariaLabel: "See All Projects", ariaExpanded: false, ariaControls: "projects", type: "button", isExternal: true},
description:{text: "I am a SEO front-end engineer who believes in user experience-driven development with a focus on problem-solving. For this, I design code that prioritizes simplicity while building robust and scalable applications. Welcome to my portfolio, where you will find a resume of my journey, certifications, and projects."},
certifieds: [
  {id: '1', title: 'Azure Fundamentals Certified', description: 'AZ-900', link: 'assets/certificates/az-900.png', linkDescription: 'View Certificate'},
  {id: '2', title: 'Post Graduate in Multiplatform Mobile Application Projects', description: 'DESCOMPLICA', link: 'assets/certificates/descomplica-multiplataform.png' ,linkDescription: 'View Certificate'},
  {id: '3', title: 'Mastertech in Technology Systems Projects', description: 'DESCOMPLICA', link: 'assets/certificates/descomplica-projects.png', linkDescription: 'View Certificate'},
  {id: '4', title: 'DevOps & Agile Culture', description: 'FIAP', link:  'assets/certificates/fiap-agile.png', linkDescription: 'View Certificate'},
  {id: '5', title: 'Cloud Fundamentals, Admnistration and Solutions Architect', description: 'FIAP', link: 'assets/certificates/fiap-cloud.png', linkDescription: 'View Certificate'},
  {id: '6', title: 'Services Architecture, API and Mobile Architecture', description: 'FIAP', link: 'assets/certificates/fiap-api.png', linkDescription: 'View Certificate'},
  {id: '7', title: 'Design Thinking', description: 'ECHOOS', link: 'assets/certificates/echoos-design.png', linkDescription: 'View Certificate'},
  {id: '8', title: 'IA Fundamentals for devs', description: 'SANTANDER UNIVERSITY', link: 'assets/certificates/santander-ia.png', linkDescription: 'View Certificate'},],
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
headingAbout: {title: "ABOUT", subtitle: "Jessica Quirino"},
descriptionAbout:{text: "<P>I Have more than 7 years of experience in the area of web development. My interest starts when i was teenager and my father was programmer, he taught me a little <strong><i>Java</i></strong> which possibly explains why I went into the front end area. Jokes aside, I've always liked drawing things and designing visual interfaces was something that naturally happened to me. Having worked as a designer and in marketing for many years, I added this knowledge to my career as a developer, standing out as a professional with specialization in SEO, user experience, performance and best practices in product development. </P><p>  Personally, I consider myself a very creative and inquisitive person. I have a good aesthetic sense and I am quite organized. I always seek to demonstrate these best virtues in the development of everything I do, always seeking to deliver the best and solve problems that I encounter on my way.</p>"},
headingRead: {title: "READ", subtitle: "Ebooks and Articles"},
descriptionRead:{text: "An ebook about how artificial intelligence can help you in your daily life as a front end developer."},
buttonRead: {label: "Download now", target:'assets/files/ebook-IA.pdf', ariaLabel: "Download now", ariaExpanded: false, ariaControls: "downloads", type: "button", isExternal: true},
};

export { HomeContent };
