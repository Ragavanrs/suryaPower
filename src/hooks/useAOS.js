import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// options is intentionally excluded from deps — AOS.init is one-time setup.
// Callers should pass a stable options object (e.g. defined outside the component)
// rather than an inline literal if re-initialisation on change is needed.
const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-in-out', ...options });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAOS;
