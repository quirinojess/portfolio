import { createContext, useContext } from "react";
import { TProjectsContext } from "types/Project";

const ProjectsContext = createContext<TProjectsContext | undefined>(undefined);

export const useProjects = (): TProjectsContext => {
 const context = useContext(ProjectsContext);
 if (!context) {
  throw new Error("useProjects must be used within a ProjectProvider");
 }
 return context;
};

export { ProjectsContext };
