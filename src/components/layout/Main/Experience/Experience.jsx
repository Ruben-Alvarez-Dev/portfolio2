import React from 'react';
import Section from '../../../ui/Section/Section';
import './Experience.css';

/**
 * Experience section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      duration: "2020 - Present",
      description: "Lideré el desarrollo de aplicaciones web usando React y Redux, mejorando el rendimiento en un 40%."
    },
    {
      id: 2,
      company: "Digital Innovations",
      position: "Full Stack Developer",
      duration: "2018 - 2020",
      description: "Desarrollé aplicaciones full-stack con Node.js y React, implementando APIs RESTful."
    },
    {
      id: 3,
      company: "Web Development Agency",
      position: "Junior Developer",
      duration: "2016 - 2018",
      description: "Creé sitios web responsivos con HTML, CSS y JavaScript, mejorando la experiencia del usuario."
    }
  ];

  return (
    <Section id="experience" className="experience">
      <div className="experience__content">
        <h2 className="experience__title">Experiencia</h2>
        <div className="experience__timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__item">
              <div className="experience__header">
                <h3 className="experience__position">{exp.position}</h3>
                <span className="experience__duration">{exp.duration}</span>
              </div>
              <h4 className="experience__company">{exp.company}</h4>
              <p className="experience__description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
