import { useState, useMemo } from "react";
import { ProjectsContext } from "./ProjectContext";
import { TProjectsProvider, TProject } from "types/Project";

const ProjectsProvider = ({ children }: TProjectsProvider) => {
 const [projects, setProjects] = useState<TProject[] | null>(null);

 const value = useMemo(() => ({ projects, setProjects }), [projects]);

 return (
  <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
 );
};

export { ProjectsProvider };
