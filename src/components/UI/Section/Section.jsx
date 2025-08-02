import React from 'react';
import './Section.css';

/**
 * Base Section component that serves as a template for all section components
 * @param {Object} props - Component props
 * @param {string} props.id - Section identifier for navigation
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.customStyle - Custom styles to apply
 */
const Section = ({ id, className = '', children, customStyle = '' }) => {
  return (
    <section 
      id={id}
      className={`section ${className}`.trim()}
      style={customStyle ? { customStyle } : {}}
    >
      {children}
    </section>
  );
};

export default Section;
