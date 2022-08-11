import React from "react";
import { Align, Alignleft, Alignright, H1, Text, Linkcv } from "./styled";
import Navigation from "../../components/nav/navigation";
import Skills from "../../components/skills/skill";
import Pdf from "../../assets/files/curriculo.pdf";

const About = () => {
 return (
  <>
   <Align>
    <Alignleft>
     <Navigation />
    </Alignleft>

    <Alignright>
     <H1>Hi, I´m Jess!</H1>

     <Text>
      I have a passion for design, creation and technology. I made my first
      website when I was just 13 years old, influenced by my father who was a
      developer. Since then I never stopped. What started as a hobby turned into
      my professional journey.
      <p>
       Over the years I also worked as a designer, which brought me fundamental
       knowledge about creation and UX and UI. I also specialize in design
       thinking and agile development methodologies, which match my
       entrepreneurial profile, passionate about organization and productivity.
       Today I work as a front-end developer and I seek to deliver optimized
       solutions, in clean and functional projects.
      </p>
     </Text>

     <Skills />

     <Linkcv>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
      >
       <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
      </svg>
      <a target="_blank" href={Pdf} rel="noreferrer">
       Download my cv resume
      </a>
     </Linkcv>
    </Alignright>
   </Align>
  </>
 );
};

export default About;
