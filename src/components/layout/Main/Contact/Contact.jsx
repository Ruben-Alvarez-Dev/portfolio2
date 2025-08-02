import React, { useState } from 'react';
import Section from '../../../ui/Section/Section';
import './Contact.css';

/**
 * Contact section component
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 */
const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! (Esta es una demostración)');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Contacto</h2>
        <div className="contact__container">
          <div className="contact__info">
            <h3 className="contact__info-title">¡Hablemos!</h3>
            <p className="contact__info-text">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
              ¿O simplemente quieres saludar? ¡Estaré encantado de escucharte!
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Email:</span>
                <span className="contact__detail-value">contacto@ejemplo.com</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Teléfono:</span>
                <span className="contact__detail-value">+1 234 567 890</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Ubicación:</span>
                <span className="contact__detail-value">Ciudad, País</span>
              </div>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact__form-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
