import { useState, useMemo, useEffect } from "react";
import { ProjectsContext } from "./ProjectContext";
import { TProjectsProvider, TProject } from "types/Project";

const ProjectsProvider = ({ children }: TProjectsProvider) => {
 const [projects, setProjects] = useState<TProject[] | null>(() => {
  const savedProjects = localStorage.getItem("projects");
  return savedProjects ? JSON.parse(savedProjects) : null;
 });

 useEffect(() => {
  if (projects !== null) {
   localStorage.setItem("projects", JSON.stringify(projects));
  }
 }, [projects]);

 const value = useMemo(() => ({ projects, setProjects }), [projects]);

 return (
  <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
 );
};

export { ProjectsProvider };
