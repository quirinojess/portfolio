import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Projects, ProjectPage } from "pages";

const RoutesConfig = () => {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/projects" element={<Projects />} />
   <Route path="/projects/:category" element={<Projects />} />
   <Route path="/project/:id" element={<ProjectPage />} />
   <Route path="*" element={<Navigate to="/" />} />
  </Routes>
 );
};

export { RoutesConfig };
