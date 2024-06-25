import { IMenu, IMenuItem } from "types/Menu";
import * as S from "./styled";
import { useHandleClick } from "../../hooks";

function Menu(content: IMenu) {
 const { handleClick } = useHandleClick();

 const navbarMap = content.content.map((item: IMenuItem) => {
  return (
   <S.NavItem
    key={item.id}
    onClick={() => handleClick(item.path, false, item.scrollTarget)}
    onKeyDown={() => handleClick(item.path, false, item.scrollTarget)}>
    {item.label}
   </S.NavItem>
  );
 });

 return <S.Navbar>{navbarMap}</S.Navbar>;
}
export { Menu };
