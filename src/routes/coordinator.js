export  const goToHomePage = (history) => {
  history.push("/");
};

export const goToAbout = (history) => {
  history.push("/about");
};

export const goToProjects = (history) => {
  history.push("/projects");
};



export const goToLastPage = (history) => {
  history.goBack();
};
