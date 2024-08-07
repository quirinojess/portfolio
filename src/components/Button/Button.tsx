import { IButton } from "types/Button";
import * as S from "./styled";
import { useHandleClick } from "../../hooks";

function Button({ content }: IButton) {
 const {
  label,
  target,
  ariaControls,
  ariaExpanded,
  ariaLabel,
  type,
  scrollTo,
  isExternal,
 } = content;
 const { handleClick } = useHandleClick();

 return (
  <S.Button
   onClick={() => handleClick(target, scrollTo, isExternal)}
   onKeyDown={() => handleClick(target, scrollTo, isExternal)}
   type={type}
   aria-label={ariaLabel}
   aria-expanded={ariaExpanded}
   aria-controls={ariaControls}>
   {label}
  </S.Button>
 );
}

export { Button };
