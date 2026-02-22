import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// options is intentionally excluded from deps — AOS.init is one-time setup.
// Callers should pass a stable options object (e.g. defined outside the component)
// rather than an inline literal if re-initialisation on change is needed.
const useAOS = (options = {}) => {
  useEffect(() => {
    // Disable animations for users who have requested reduced motion (WCAG 2.3.3)
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
      ...options,
      // Overrides any caller-supplied disable flag when reduced-motion is set
      disable: prefersReducedMotion || options.disable || false,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAOS;
