import React from 'react';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import './SelectorGroup.css';

/**
 * Group component for theme and language selectors
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Current theme mode
 * @param {Function} props.onToggleTheme - Function to toggle theme
 * @param {string} props.currentLanguage - Current language ('en' or 'es')
 * @param {Function} props.onLanguageChange - Function to handle language changes
 */
const SelectorGroup = ({ isDarkMode, onToggleTheme, currentLanguage, onLanguageChange }) => {
  const handleLanguageChange = (isEnglish) => {
    // Convert boolean to string
    onLanguageChange(isEnglish ? 'en' : 'es');
  };

  return (
    <div className="selector-group">
      <ThemeSelector 
        isDarkMode={isDarkMode}
        toggleTheme={onToggleTheme}
      />
      <LanguageSelector 
        isEnglish={currentLanguage === 'en'}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default SelectorGroup;
