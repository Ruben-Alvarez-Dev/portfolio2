import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll position
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} - Whether the page is scrolled beyond the threshold
 */
const useScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };

    // Check initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useScroll;
