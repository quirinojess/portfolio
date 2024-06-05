import { IMenu } from "@/types/Menu";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

function Menu(content: { content: IMenu }) {
 const navigate = useNavigate();

 function handleClick(route: string) {
  return navigate(route);
 }

 const navbarMap = content.content.map(item => (
  <S.NavItem
   key={item.id}
   onClick={() => handleClick(item.path)}
   onKeyDown={() => handleClick(item.path)}>
   {item.label}
  </S.NavItem>
 ));

 return <S.Navbar>{navbarMap}</S.Navbar>;
}
export { Menu };
