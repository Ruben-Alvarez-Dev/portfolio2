import { useState, useEffect, useCallback } from 'react';

const useTheme = () => {
  // Check for saved theme preference or use system preference
  const getInitialTheme = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
    }
    // Default to light theme
    return false;
  }, []);

  const [isDark, setIsDark] = useState(false);

  // Apply theme class to document element
  const applyTheme = useCallback((dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    const dark = getInitialTheme();
    setIsDark(dark);
    applyTheme(dark);
  }, [applyTheme, getInitialTheme]);

  // Toggle between dark and light theme
  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newTheme = !prev;
      applyTheme(newTheme);
      return newTheme;
    });
  }, [applyTheme]);

  return { isDark, toggleTheme };
};

export default useTheme;
