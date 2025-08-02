import React from 'react';
import './Selector.css';

/**
 * Reusable Selector component for toggles
 * @param {Object} props - Component props
 * @param {ReactNode} props.leftItem - Element to display on the left
 * @param {ReactNode} props.rightItem - Element to display on the right
 * @param {boolean} props.isChecked - Current toggle state (on/off)
 * @param {Function} props.onChange - Function to handle state changes
 * @param {string} [props.backgroundGradient] - Optional gradient for background
 * @param {boolean} [props.showThumbContent] - Show content in thumb
 * @param {ReactNode} [props.thumbContent] - Thumb content when active
 */
const Selector = ({
  leftItem,
  rightItem,
  isChecked = false,
  onChange = () => {},

  backgroundGradient = null,
  showThumbContent = false,
  thumbContent = null
}) => {
  return (
    <div 
      className="selector"
      onClick={() => onChange(!isChecked)}
    >
      <div 
        className={`selector-track ${backgroundGradient ? 'with-gradient' : ''}`}
        style={backgroundGradient ? {'--language-gradient': backgroundGradient} : {}}
      >
        {/* Thumb element */}
        <div 
          className={`selector-thumb ${isChecked ? 'moved' : ''} ${showThumbContent ? 'with-content' : ''}`}
        >
          {showThumbContent && thumbContent}
        </div>

        {/* Left item */}
        <div className="selector-item-left">
          {leftItem}
        </div>
        
        {/* Right item */}
        <div className="selector-item-right">
          {rightItem}
        </div>
      </div>
    </div>
  );
};

export default Selector;
