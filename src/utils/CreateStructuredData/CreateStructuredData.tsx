import { IStructuredData } from "types/StructuredData";

const CreateStructuredData = (project: IStructuredData) => {
 const {
  name,
  description,
  url,
  image,
  authorName,
  datePublished,
  programmingLanguage,
  softwareRequirements,
  keywords,
  license,
 } = project;

 return {
  "@context": "https://schema.org",
  "@type": "Project",
  name,
  description,
  url,
  image,
  author: {
   "@type": "Person",
   name: authorName,
  },
  datePublished,
  programmingLanguage,
  softwareRequirements,
  keywords: keywords.join(", "),
  license,
 };
};

export { CreateStructuredData };
