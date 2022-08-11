import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";
import About from "../pages/about/about";
import { Projects } from "../pages/projects/projects";

const Router = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path={"/"}>
     <HomePage />
    </Route>

    <Route exact path={"/about"}>
     <About />
    </Route>

    <Route exact path={"/projects"}>
     <Projects />
    </Route>

    <Route>
     <div>Página não encontrada</div>
    </Route>
   </Switch>
  </BrowserRouter>
 );
};

export default Router;
