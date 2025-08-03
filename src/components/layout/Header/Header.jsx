import React, { useState, useEffect } from 'react';
import useTheme from '@/hooks/useTheme';
import LogoGroup from './LogoGroup/LogoGroup';
import NavbarGroup from './NavbarGroup/NavbarGroup';
import Spacer from './Spacer/Spacer';
import SelectorGroup from './SelectorGroup/SelectorGroup';
import BurgerGroup from './BurgerGroup/BurgerGroup';
import './Header.css';

/**
 * Main header component
 * Contains logo, navigation, selectors and burger menu
 */
const Header = ({ mainRef }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    if (!mainRef?.current) {
      console.log('mainRef no está disponible');
      return;
    }

    const mainElement = mainRef.current;
    
    const handleScroll = () => {
      // Verifica si el main está siendo desplazado
      const scrollPosition = mainElement.scrollTop;
      const shouldBeScrolled = scrollPosition > 10;
      console.log('Scroll position:', scrollPosition, 'Scrolled:', shouldBeScrolled);
      setIsScrolled(shouldBeScrolled);
    };

    // Añadir el event listener para el scroll
    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Verificar el estado inicial
    handleScroll();

    // Limpiar
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, [mainRef]);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    // Logic to change application language would go here
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <LogoGroup />
        <NavbarGroup />
        <Spacer />
        <SelectorGroup 
          isDarkMode={isDark}
          onToggleTheme={toggleTheme}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
        <BurgerGroup />
      </div>
    </header>
  );
};

export default Header;
