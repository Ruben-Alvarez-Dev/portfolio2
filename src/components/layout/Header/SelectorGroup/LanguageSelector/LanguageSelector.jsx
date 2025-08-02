import React from 'react';
import Selector from '../../../../UI/Selector/Selector';
import './LanguageSelector.css';

/**
 * Language selector component with gradient background
 * @param {Object} props - Component props
 * @param {boolean} props.isEnglish - Current language state (true for English)
 * @param {Function} props.onLanguageChange - Function to handle language changes
 * @param {boolean} props.isDarkMode - Current theme mode
 */
const LanguageSelector = ({ isEnglish, onLanguageChange, isDarkMode }) => {
  // Dynamic gradient based on selected language
  const backgroundGradient = isEnglish 
    ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)' 
    : 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.3) 100%)';

  // Elements with specific styles
  const leftItem = (
    <span className={`language-item ${isEnglish ? 'active' : 'inactive'}`}>
      EN
    </span>
  );

  const rightItem = (
    <span className={`language-item ${!isEnglish ? 'active' : 'inactive'}`}>
      ES
    </span>
  );

  return (
    <Selector
      leftItem={leftItem}
      rightItem={rightItem}
      isChecked={!isEnglish} // Invertido porque ES está a la derecha
      onChange={(checked) => onLanguageChange(!checked)} // Invertido por la lógica
      isDarkMode={isDarkMode}
      backgroundGradient={backgroundGradient}
      showThumbContent={false}
    />
  );
};

export default LanguageSelector;
