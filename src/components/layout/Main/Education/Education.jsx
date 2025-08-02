import React from 'react';
import Section from '../../../ui/Section/Section';
import './Education.css';

/**
 * Education section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      id: 1,
      institution: "Universidad Tecnológica",
      degree: "Ingeniería en Sistemas Computacionales",
      duration: "2012 - 2016",
      description: "Especialización en desarrollo de software y arquitectura de sistemas."
    },
    {
      id: 2,
      institution: "Instituto de Tecnología Avanzada",
      degree: "Maestría en Ciencias de la Computación",
      duration: "2017 - 2019",
      description: "Investigación en inteligencia artificial y machine learning."
    }
  ];

  return (
    <Section id="education" className="education">
      <div className="education__content">
        <h2 className="education__title">Educación</h2>
        <div className="education__list">
          {educationData.map((edu) => (
            <div key={edu.id} className="education__item">
              <div className="education__header">
                <h3 className="education__degree">{edu.degree}</h3>
                <span className="education__duration">{edu.duration}</span>
              </div>
              <h4 className="education__institution">{edu.institution}</h4>
              <p className="education__description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
