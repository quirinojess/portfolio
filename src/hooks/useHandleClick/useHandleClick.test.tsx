import { renderHook } from "@testing-library/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { useHandleClick } from "./useHandleClick";

describe("useHandleClick", () => {
 it("returns handleClick function", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
   <Router>{children}</Router>
  );
  const { result } = renderHook(() => useHandleClick(), { wrapper });
  expect(result.current.handleClick).toBeDefined();
 });
});
