import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerItem.css';

/**
 * BurgerItem - Botón de hamburguesa para el menú móvil
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.isOpen - Indica si el menú está abierto
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic en el botón
 */
const BurgerItem = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`burger-item ${isOpen ? 'burger-item--open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
    >
      <FaBars className="burger-item__icon burger-item__icon--bars" />
      <FaTimes className="burger-item__icon burger-item__icon--close" />
    </button>
  );
};

export default BurgerItem;
