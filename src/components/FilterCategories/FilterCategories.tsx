import { TFilterCategories } from "types/FilterCategories";
import * as S from "./styled";
import { useHandleClick } from "hooks";

function FilterCategories({ content }: TFilterCategories) {
 const testId = "filterCategories";

 const { handleClick } = useHandleClick();

 const navbarMap = content.map((item: string) => {
  return (
   <S.NavItem
    key={item}
    onClick={() => handleClick(item, "", false, "category")}
    onKeyDown={() => handleClick(item, "", false, "category")}>
    {item}
   </S.NavItem>
  );
 });

 return <S.Navbar data-testid={testId}>{navbarMap}</S.Navbar>;
}
export { FilterCategories };
