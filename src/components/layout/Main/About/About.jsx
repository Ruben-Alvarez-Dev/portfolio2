import React from 'react';
import Section from '../../../ui/Section/Section';
import './About.css';

/**
 * About section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const About = ({ isDarkMode }) => {
  return (
    <Section id="about" className="about">
      <div className="about__content">
        <h2 className="about__title">Sobre Mí</h2>
        <div className="about__container">
          <div className="about__image">
            <div className="about__image-placeholder"></div>
          </div>
          <div className="about__text">
            <p className="about__description">
              Soy un desarrollador apasionado con experiencia en tecnologías web modernas. 
              Me especializo en crear aplicaciones eficientes y escalables.
            </p>
            <p className="about__description">
              Mi enfoque combina habilidades técnicas con una comprensión profunda 
              de las necesidades del usuario para crear soluciones digitales impactantes.
            </p>
            <div className="about__skills">
              <h3 className="about__skills-title">Habilidades</h3>
              <ul className="about__skills-list">
                <li className="about__skills-item">JavaScript/React</li>
                <li className="about__skills-item">Node.js</li>
                <li className="about__skills-item">CSS/HTML</li>
                <li className="about__skills-item">Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
