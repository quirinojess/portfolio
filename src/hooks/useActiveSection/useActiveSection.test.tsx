import { renderHook, act } from "@testing-library/react-hooks";
import { useActiveSection } from "./useActiveSection";

describe("useActiveSection", () => {
 it("should call setActiveSection on scroll", () => {
  const sectionIds = ["section1", "section2"];

  global.window = Object.create(window);
  Object.defineProperty(window, "innerHeight", { value: 800 });

  // eslint-disable-next-line testing-library/no-node-access
  document.getElementById = jest.fn().mockImplementation(id => ({
   getBoundingClientRect: () => ({ top: sectionIds.indexOf(id) * 800 }),
  }));

  renderHook(() => useActiveSection(sectionIds));

  act(() => {
   window.dispatchEvent(new Event("scroll"));
  });
 });
});
