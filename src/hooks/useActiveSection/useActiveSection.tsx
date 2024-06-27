import { useEffect, useState } from "react";

function useActiveSection(sectionIds: string[]) {
 const [activeSection, setActiveSection] = useState<string | null>(null);

 useEffect(() => {
  const handleScroll = () => {
   let activeId = "";

   for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) continue;

    const top = section.getBoundingClientRect().top;
    const isVisible = top >= 0 && top <= window.innerHeight * 0.5;

    if (isVisible) {
     activeId = id;
     break;
    }
   }

   if (activeId) {
    setActiveSection(activeId);
   }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [sectionIds, setActiveSection]);

 return activeSection;
}

export { useActiveSection };
