import React from "react";
import { Align, Alignleft, Alignright, H1, Text } from "./styled";
import Navigation from "../../components/nav/navigation";
import Skills from "../../components/skills/skill";

const About = () => {
 return (
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
   </Alignright>
  </Align>
 );
};

export { About };
