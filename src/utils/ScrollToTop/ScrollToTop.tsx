const ScrollToTop = () => {
 const scrollStep = -window.scrollY / 15;
 const intervalId = setInterval(() => {
  if (window.scrollY !== 0) {
   window.scrollBy(0, scrollStep);
  } else {
   clearInterval(intervalId);
  }
 }, 15);
};

export { ScrollToTop };
