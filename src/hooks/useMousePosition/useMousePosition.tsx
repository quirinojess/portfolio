import { useState, useEffect } from "react";
import { TMousePosition } from "types/MousePosition";

function useMousePosition() {
 const [mousePosition, setMousePosition] = useState<TMousePosition>({
  x: 0,
  y: 0,
 });

 useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
   setMousePosition({
    x: event.clientX,
    y: event.clientY,
   });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
   window.removeEventListener("mousemove", handleMouseMove);
  };
 }, []);

 return mousePosition;
}

export { useMousePosition };
