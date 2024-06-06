import { useNavigate } from "react-router-dom";

function useHandleClick() {
 const navigate = useNavigate();
 function handleClick(route: string) {
  navigate(route);
 }
 return { handleClick };
}

export { useHandleClick };
