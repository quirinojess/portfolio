import { useNavigate } from "react-router-dom";

function useHandleClick() {
 const navigate = useNavigate();

 function handleClick(
  route: string,
  isExternal?: boolean,
  scrollTarget?: boolean
 ) {
  if (scrollTarget) {
   const element = document.querySelector(`#${route}`);
   if (element) {
    element.scrollIntoView({ behavior: "smooth" });
   }
  } else {
   if (isExternal) {
    window.open(route, "_blank");
   } else {
    navigate(route);
   }
  }
 }

 return { handleClick };
}

export { useHandleClick };
