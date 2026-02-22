import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// options is intentionally excluded from deps — AOS.init is called once on mount
const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-in-out', ...options });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAOS;
