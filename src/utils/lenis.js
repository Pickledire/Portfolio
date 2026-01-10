import Lenis from 'lenis';

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  let rafId;
  
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);
  
  // Store the original destroy method
  const originalDestroy = lenis.destroy?.bind(lenis);
  
  // Override destroy to also cancel the animation frame
  lenis.destroy = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (originalDestroy) {
      originalDestroy();
    }
  };
  
  return lenis;
};