import { useNavigate } from "react-router-dom";

function useHandleClick() {
 const navigate = useNavigate();
 function handleClick(route: string, isExternal: boolean = false) {
  if (isExternal) {
   window.open(route, "_blank");
  }

  navigate(route);
 }
 return { handleClick };
}

export { useHandleClick };
