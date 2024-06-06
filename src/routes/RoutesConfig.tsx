import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home, Projects } from "pages";

const RoutesConfig = () => {
 return (
  <Switch>
   <Route path="/" element={<Home />} />
   <Route path="projects" element={<Projects />} />
   <Route path="*" element={<Navigate to="/" />} />
  </Switch>
 );
};

export { RoutesConfig };
