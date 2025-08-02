import React from 'react';
import Selector from '../../../../UI/Selector/Selector';
import './ThemeSelector.css';

/**
 * Theme selector component with icon support
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Current theme mode (true for dark)
 * @param {Function} props.toggleTheme - Function to toggle theme
 */
const ThemeSelector = ({ isDarkMode, toggleTheme }) => {
  // Elements with specific styles and greyout filters
  const leftItem = (
    <div className={`theme-icon theme-icon--left ${!isDarkMode ? 'inactive' : ''}`}>
      🌙
    </div>
  );

  const rightItem = (
    <div className={`theme-icon theme-icon--right ${isDarkMode ? 'inactive' : ''}`}>
      ☀️
    </div>
  );

  return (
    <Selector
      leftItem={leftItem}
      rightItem={rightItem}
      isChecked={!isDarkMode} // Invertido porque sol (claro) está a la derecha
      onChange={() => toggleTheme()}
      isDarkMode={isDarkMode}
      showThumbContent={false}
      thumbContent={null}
    />
  );
};

export default ThemeSelector;
