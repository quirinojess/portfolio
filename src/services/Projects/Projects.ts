import api from "config/Api/ApiConfig";

async function getProjects() {
 try {
  const endpoint = `/posts/`;
  const { data } = await api.get(endpoint, {
   headers: {
    "login-mode": false,
   },
  });

  return data;
 } catch (error) {
  throw new Error(
   "Failed to load projects. Please try again later."
  );
 }
}

const ProjectsService = {
 getProjects,
};

export default ProjectsService;
