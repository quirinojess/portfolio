import React from "react";
import Logo from "../../components/logo/logo";
import Card from "../../components/card/card";
import Navigation from "../../components/nav/navigation";
import { Align, Alignleft, Alignright } from "./styled";
import { HomeContent } from "../../content/Home/Home";

const Home = () => {
 const testId = "home";
 const { menu } = HomeContent;

 return (
  <Align data-testid={testId}>
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
