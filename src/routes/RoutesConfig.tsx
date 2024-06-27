import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "pages";

const RoutesConfig = () => {
 return (
  <Switch>
   <Route path="/" element={<Home />} />
   <Route path="*" element={<Navigate to="/" />} />
  </Switch>
 );
};

export { RoutesConfig };
