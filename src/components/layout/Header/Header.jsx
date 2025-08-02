import React, { useState } from 'react';
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
const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { isDark, toggleTheme } = useTheme();

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    // Logic to change application language would go here
  };

  return (
    <header className="header">
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
