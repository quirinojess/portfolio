import { ThemeDark } from "./ThemeDark";

describe("ThemeDark", () => {
 Object.keys(ThemeDark).forEach(key => {
  it(`should have the "${key}" property`, () => {
   expect(ThemeDark).toHaveProperty(key);
  });
 });
});
