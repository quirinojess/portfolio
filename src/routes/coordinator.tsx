import { History } from "history";

export  const goToHomePage = (history: History<unknown> | string[]) => {
  history.push("/");
};

export const goToAbout = (history: History<unknown> | string[]) => {
  history.push("/about");
};

export const goToProjects = (history: History<unknown> | string[]) => {
  history.push("/projects");
};



export const goToLastPage = (history: { goBack: () => void; }) => {
  history.goBack();
};
