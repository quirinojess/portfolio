import React from "react";
import Logo from "../../components/logo/logo";
import Card from "../../components/card/card";
import Navigation from "../../components/nav/navigation";
import { Align, Alignleft, Alignright } from "./styled";

const Home = () => {
 return (
  <Align>
   <Alignleft>
    <Navigation />
   </Alignleft>
   <Alignright>
    <Logo />
    <Card />
   </Alignright>
  </Align>
 );
};

export { Home };
