import { useEffect, useState } from "react";
import { TMenu, TMenuItem } from "types/Menu";
import * as S from "./styled";
import { useHandleClick } from "hooks";
import { useScroll } from "context/ScrollContext";

function Menu(content: TMenu) {
 const [isOpen, setIsOpen] = useState(false);
 const { handleClick } = useHandleClick();
 const { scrollTarget } = useScroll();

 const testId = "menu";

 useEffect(() => {
  if (scrollTarget) {
   const element = document.getElementById(scrollTarget);
   if (element) {
    element.scrollIntoView({ behavior: "smooth" });
   }
  }
 }, [scrollTarget]);

 const navbarMap = content.content.map((item: TMenuItem) => (
  <S.NavItem
   key={item.id}
   onClick={() => {
    handleClick(item.path, item.scroll, false);
    setIsOpen(false);
   }}
   onKeyDown={() => handleClick(item.path, item.scroll, false)}>
   {item.label}
  </S.NavItem>
 ));

 return (
  <S.Container>
   <S.Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
    {[...Array(3)].map((_, index) => (
     <span key={`hamburger-line-${index}`} />
    ))}
   </S.Hamburger>
   <S.Navbar data-testid={testId} isOpen={isOpen}>
    {navbarMap}
   </S.Navbar>
  </S.Container>
 );
}

export { Menu };
