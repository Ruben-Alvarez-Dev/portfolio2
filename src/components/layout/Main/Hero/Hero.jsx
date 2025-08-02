import React from 'react';
import Section from '../../../ui/Section/Section';
import './Hero.css';

/**
 * Hero section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const Hero = ({ isDarkMode }) => {
  return (
    <Section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Bienvenido a Mi Portafolio</h1>
        <p className="hero__subtitle">Desarrollador Full Stack apasionado por crear experiencias digitales</p>
        <div className="hero__cta">
          <button className="hero__button hero__button--primary">Ver Proyectos</button>
          <button className="hero__button hero__button--secondary">Contactar</button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
