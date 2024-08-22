import { IButton } from "types/Button";
import * as S from "./styled";
import { useHandleClick } from "../../hooks";

function Button({ content, variant = "primary", isProject }: IButton) {
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

 const handleButtonClick = () => {
  handleClick(target, scrollTo, isExternal, isProject);
 };

 return (
  <S.Button
   onClick={handleButtonClick}
   onKeyDown={handleButtonClick}
   type={type}
   aria-label={ariaLabel}
   aria-expanded={ariaExpanded}
   aria-controls={ariaControls}
   variant={variant}>
   {label}
  </S.Button>
 );
}

export { Button };
