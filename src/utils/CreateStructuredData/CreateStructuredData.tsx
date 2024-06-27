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

 const formattedKeywords = Array.isArray(keywords)
  ? keywords.join(", ")
  : keywords;

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
  keywords: formattedKeywords,
  license,
 };
};

export { CreateStructuredData };
