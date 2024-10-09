import {
 Heading,
 Headings,
 Sections,
 ProjectsCard,
 FilterCategories,
} from "components";
import * as S from "./styled";
import { ProjectsContent } from "content";
import { useActiveSection } from "hooks";
import { ScrollToTop } from "utils";
import { useEffect, useState } from "react";
import { ProjectsService } from "services";
import { useProjects } from "context/ProjectContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const Projects = () => {
 const testId = "projects";
 const sectionIds = [`${testId}-head`, `${testId}-projects`];
 const activeSection = useActiveSection(sectionIds);
 const { headingProjects } = ProjectsContent;
 const { projects, setProjects } = useProjects();
 const [categories, setCategories] = useState([]);
 const { category } = useParams<{ category?: string }>();

 async function loadProjects() {
  try {
   const result = await ProjectsService.getProjects();
   if (result) {
    setProjects(result);
   }
  } catch (error: any) {
   toast.error(error.message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "dark",
   });
  }
  try {
   const result = await ProjectsService.getCategories();
   if (result) {
    const categoryNames = result.map((category: any) => category.name);
    setCategories(categoryNames);
   }
  } catch (error: any) {
   toast.error(error.message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "dark",
   });
  }
 }

 const filteredProjects = category
  ? projects?.filter((project: any) =>
     project.category_names.includes(category)
    )
  : projects;

 const projectsMap = filteredProjects?.map((project: any) => (
  <ProjectsCard
   key={project.id}
   content={{
    id: project.id,
    image: {
     alt: project.title.rendered,
     src: project.fimg_url,
     title: project.title.rendered,
     width: "400",
     height: "400",
    },
    title: project.title.rendered,
    button: {
     label: "View Full",
     target: `${project.id}`,
     ariaLabel: "project-content",
     ariaExpanded: false,
     ariaControls: `project-${project.id}`,
     type: "button",
    },
   }}
  />
 ));

 useEffect(() => {
  loadProjects();
  ScrollToTop();
 }, []);

 return (
  <S.Main data-testid={testId}>
   <FilterCategories content={categories} />
   <Sections
    flex="column"
    align="start"
    justify="start"
    id={`${testId}-projects`}
    isVisible={activeSection === `${testId}-projects`}>
    <Heading content={headingProjects} activeH1 />
   </Sections>
   <Sections
    flex="row"
    align="start"
    justify="space-between"
    id={`${testId}-projects`}
    isVisible={activeSection === `${testId}-projects`}>
    {filteredProjects && filteredProjects.length > 0 ? (
     projectsMap
    ) : (
     <Headings title={"No projects available"} type={"h4"} />
    )}{" "}
   </Sections>
  </S.Main>
 );
};

export { Projects };
