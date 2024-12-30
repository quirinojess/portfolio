import { renderHook } from "@testing-library/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { useHandleClick } from "./useHandleClick";
import ScrollProvider from "context/ScrollContext";

describe("useHandleClick", () => {
 it("returns handleClick function", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
   <Router>
    <ScrollProvider>{children}</ScrollProvider>
   </Router>
  );
  const { result } = renderHook(() => useHandleClick(), { wrapper });
  expect(result.current.handleClick).toBeDefined();
 });
});
