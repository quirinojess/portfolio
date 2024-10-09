import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "context/ScrollContext";

function useHandleClick() {
 const navigate = useNavigate();
 const location = useLocation();
 const { setScrollTarget } = useScroll();

 function handleClick(
  route: string,
  scrollTo?: string,
  isExternal?: boolean,
  paramType?: string
 ) {
  if (paramType) {
   const projectRoute = (() => {
    switch (paramType) {
     case "project":
      return `/project/${route}`;
     case "category":
      return `/projects/${route}`;
     default:
      console.warn(`Unknown paramType: ${paramType}`);
      return null;
    }
   })();

   if (projectRoute && location.pathname !== projectRoute) {
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
