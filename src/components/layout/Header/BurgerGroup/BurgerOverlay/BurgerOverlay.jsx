import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerOverlay.css';

/**
 * BurgerOverlay - Menú desplegable para móviles
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onClose - Función para cerrar el menú
 */
const BurgerOverlay = ({ onClose }) => {
  // Cerrar el menú al presionar la tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // El manejo del scroll se hace desde el componente padre (BurgerGroup)

  const navItems = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' },
  ];

  return (
    <div className="burger-overlay">
      <div className="burger-overlay__backdrop" onClick={onClose} />
      <nav className="burger-overlay__content">
        <ul className="burger-overlay__list">
          {navItems.map((item, index) => (
            <li key={item.to} className="burger-overlay__item" style={{ '--delay': `${0.1 * index}s` }}>
              <NavLink
                to={item.to}
                className="burger-overlay__link"
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerOverlay;
