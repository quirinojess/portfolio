import { renderHook, act } from "@testing-library/react-hooks";
import { useMousePosition } from "./useMousePosition";

describe("useMousePosition", () => {
 it("updates mouse position on mousemove event", () => {
  const { result } = renderHook(() => useMousePosition());

  act(() => {
   const event = new MouseEvent("mousemove", {
    clientX: 50,
    clientY: 100,
   });

   window.dispatchEvent(event);
  });

  expect(result.current.x).toBe(50);
  expect(result.current.y).toBe(100);
 });
});
