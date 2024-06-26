import { useEffect } from "react";

const Head = () => {
 useEffect(() => {
  document.title = "Jessica Quirino - Software Engineer";

  const metaCharset = document.createElement("meta");
  metaCharset.setAttribute("charSet", "utf-8");
  document.head.appendChild(metaCharset);

  const linkIcon = document.createElement("link");
  linkIcon.rel = "icon";
  linkIcon.href = "%PUBLIC_URL%/assets/favicon/icon.ico";
  document.head.appendChild(linkIcon);

  const linkPreconnect1 = document.createElement("link");
  linkPreconnect1.rel = "preconnect";
  linkPreconnect1.href = "https://fonts.googleapis.com";
  document.head.appendChild(linkPreconnect1);

  const linkPreconnect2 = document.createElement("link");
  linkPreconnect2.rel = "preconnect";
  linkPreconnect2.href = "https://fonts.gstatic.com";
  linkPreconnect2.crossOrigin = "anonymous";
  document.head.appendChild(linkPreconnect2);

  const linkFont = document.createElement("link");
  linkFont.rel = "stylesheet";
  linkFont.href =
   "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";
  document.head.appendChild(linkFont);

  const metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1";
  document.head.appendChild(metaViewport);

  const metaDescription = document.createElement("meta");
  metaDescription.name = "description";
  metaDescription.content =
   "Jessica Quirino portfolio, Front end software engineer specialist in SEO.";
  document.head.appendChild(metaDescription);

  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";
  scriptTag.textContent = JSON.stringify(createStructuredData());
  document.head.appendChild(scriptTag);

  return () => {
   document.head.removeChild(metaCharset);
   document.head.removeChild(linkIcon);
   document.head.removeChild(linkPreconnect1);
   document.head.removeChild(linkPreconnect2);
   document.head.removeChild(linkFont);
   document.head.removeChild(metaViewport);
   document.head.removeChild(metaDescription);
   document.head.removeChild(scriptTag);
  };
 }, []);

 return null;
};

const createStructuredData = () => {
 const projectData = {
  name: "Jessica Quirino - Software Engineer",
  description:
   "Jessica Quirino portfolio, Front end software engineer specialist in SEO",
  url: "https://jessicaquirino.dev",
  image: "https://www.seudominio.com/images/react-app.png",
  authorName: "Jessica Quirino",
  datePublished: "2023-06-01",
  programmingLanguage: "Typescript",
  softwareRequirements: "Node.js",
  keywords: [
   "React",
   "Node.js",
   "Typescript",
   "Front End",
   "SEO",
   "Software Engineer",
  ],
  license: "https://github.com/quirinojess/portfolio/blob/main/LICENSE",
 };
 return {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  ...projectData,
 };
};

export { Head };
