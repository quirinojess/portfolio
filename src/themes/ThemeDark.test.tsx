import { themeDark } from "./ThemeDark";

describe("themeDark", () => {
 Object.keys(themeDark).forEach(key => {
  it(`should have the "${key}" property`, () => {
   expect(themeDark).toHaveProperty(key);
  });
 });
});
