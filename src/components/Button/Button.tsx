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
  isExternal,
 } = content;
 const { handleClick } = useHandleClick();

 return (
  <S.Button
   onClick={() => handleClick(target, isExternal)}
   onKeyDown={() => handleClick(target, isExternal)}
   type={type}
   aria-label={ariaLabel}
   aria-expanded={ariaExpanded}
   aria-controls={ariaControls}>
   {label}
  </S.Button>
 );
}

export { Button };
