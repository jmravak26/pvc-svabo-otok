export const smoothScrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.offsetTop - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1200;
    let start: number | null = null;
    
    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutCubic(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  }
};
