import { TStructuredData } from "types/StructuredData";
import { CreateStructuredData } from "./CreateStructuredData";

describe("CreateStructuredData", () => {
 it("should create structured data object correctly", () => {
  const project: TStructuredData = {
   name: "Test Project",
   description: "A test project description",
   url: "https://example.com/project",
   image: "https://example.com/image.jpg",
   authorName: "Jane Doe",
   datePublished: "2020-01-01",
   programmingLanguage: "JavaScript",
   softwareRequirements: "Node.js 12.x",
   keywords: ["project", "test"],
   license: "AFFERO GNU GENERAL PUBLIC LICENSE Version 3, 19 November 2007",
  };

  const expectedStructuredData = {
   "@context": "https://schema.org",
   "@type": "Project",
   name: project.name,
   description: project.description,
   url: project.url,
   image: project.image,
   author: {
    "@type": "Person",
    name: project.authorName,
   },
   datePublished: project.datePublished,
   programmingLanguage: project.programmingLanguage,
   softwareRequirements: project.softwareRequirements,
   keywords: "project, test",
   license: project.license,
  };

  const result = CreateStructuredData(project);
  expect(result).toEqual(expectedStructuredData);
 });
});
