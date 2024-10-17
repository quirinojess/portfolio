import { useEffect } from "react";
import { TMenu, TMenuItem } from "types/Menu";
import * as S from "./styled";
import { useHandleClick } from "hooks";
import { useScroll } from "context/ScrollContext";

function Menu(content: TMenu) {
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

 const navbarMap = content.content.map((item: TMenuItem) => {
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
