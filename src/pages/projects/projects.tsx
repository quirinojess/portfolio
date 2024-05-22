import React from "react";
import Navigation from "../../components/nav/navigation";
import Card from "../../components/card/card";
import { Align, Alignleft, Alignright, H2 } from "./styled";

export const Projects = () => {
 return (
  <>
   <Align>
    <Alignleft>
     <Navigation />
    </Alignleft>
    <Alignright>
     <H2>Projects</H2>
     <Card />
    </Alignright>
   </Align>
  </>
 );
};
