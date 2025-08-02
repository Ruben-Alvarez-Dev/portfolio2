import React from 'react';
import Section from '../../../ui/Section/Section';
import './Projects.css';

/**
 * Projects section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pago.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
      technologies: ["Vue.js", "Firebase", "CSS3"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Panel de control meteorológico con pronósticos en tiempo real y visualizaciones.",
      technologies: ["React", "D3.js", "API REST"]
    }
  ];

  return (
    <Section id="projects" className="projects">
      <div className="projects__content">
        <h2 className="projects__title">Proyectos</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__card-image"></div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="projects__card-actions">
                  <button className="projects__button projects__button--view">Ver Proyecto</button>
                  <button className="projects__button projects__button--code">Código</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
