import { useEffect } from "react";
import { IMenu, IMenuItem } from "types/Menu";
import * as S from "./styled";
import { useHandleClick } from "hooks";
import { useScroll } from "context/ScrollContext";

function Menu(content: IMenu) {
 const testId = "menu";

 const { handleClick } = useHandleClick();
 const { scrollTarget } = useScroll();

 useEffect(() => {
  if (scrollTarget) {
   const element = document.getElementById(scrollTarget);
   if (element) {
    element.scrollIntoView({ behavior: "smooth" });
   }
  }
 }, [scrollTarget]);

 const navbarMap = content.content.map((item: IMenuItem) => {
  return (
   <S.NavItem
    key={item.id}
    onClick={() => handleClick(item.path, item.scroll, false)}
    onKeyDown={() => handleClick(item.path, item.scroll, false)}>
    {item.label}
   </S.NavItem>
  );
 });

 return <S.Navbar data-testid={testId}>{navbarMap}</S.Navbar>;
}
export { Menu };
