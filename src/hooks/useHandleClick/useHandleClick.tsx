import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "contexts/ScrollContext";

function useHandleClick() {
 const navigate = useNavigate();
 const location = useLocation();
 const { setScrollTarget } = useScroll();

 function handleClick(
  route: string,
  scrollTo?: string,
  isExternal?: boolean,
  isProject?: boolean
 ) {
  if (isProject) {
   const projectRoute = `/project/${route}`;

   if (location.pathname !== projectRoute) {
    navigate(projectRoute);
   }
   return;
  }

  if (isExternal) {
   window.open(route, "_blank");
   return;
  }

  if (location.pathname !== route) {
   navigate(route);
  }

  if (scrollTo) {
   setScrollTarget(scrollTo);
  }
 }

 return { handleClick };
}

export { useHandleClick };
