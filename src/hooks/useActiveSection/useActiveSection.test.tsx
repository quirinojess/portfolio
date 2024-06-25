import { renderHook, act } from "@testing-library/react-hooks";
import { useActiveSection } from "./useActiveSection";

describe("useActiveSection", () => {
 it("should call setActiveSection on scroll", () => {
  const sectionIds = ["section1", "section2"];
  const setActiveSection = jest.fn();

  global.window = Object.create(window);
  Object.defineProperty(window, "innerHeight", { value: 800 });

  // eslint-disable-next-line testing-library/no-node-access
  document.getElementById = jest.fn().mockImplementation(id => ({
   getBoundingClientRect: () => ({ top: id === "section1" ? 0 : 800 }),
  }));

  renderHook(() => useActiveSection(sectionIds));

  act(() => {
   window.dispatchEvent(new Event("scroll"));
  });

  expect(setActiveSection).toHaveBeenCalledWith("section1");
 });
});
