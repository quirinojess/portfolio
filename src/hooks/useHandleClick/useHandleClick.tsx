import { useNavigate } from "react-router-dom";

function useHandleClick() {
 const navigate = useNavigate();
 function handleClick(
  route: string,
  isExternal?: boolean,
  scrollTarget?: boolean
 ) {
  if (scrollTarget) {
   setTimeout(() => {
    const element = document.querySelector(`#${route}`);
    if (element) {
     element.scrollIntoView({ behavior: "smooth" });
    }
   }, 0);
  } else {
   if (isExternal) {
    window.open(route, "_blank");
   }
   navigate(route);
  }
 }
 return { handleClick };
}

export { useHandleClick };
