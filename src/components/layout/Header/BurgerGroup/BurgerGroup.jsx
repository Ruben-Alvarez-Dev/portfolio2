import React, { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import BurgerItem from './BurgerItem/BurgerItem';
import BurgerOverlay from './BurgerOverlay/BurgerOverlay';
import './BurgerGroup.css';

/**
 * BurgerGroup - Contenedor para el menú de hamburguesa
 * Maneja el estado del menú y la lógica de visualización
 */
const BurgerGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 991px)');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Cerrar el menú cuando se redimensiona a escritorio
  useEffect(() => {
    if (!isMobile && isOpen) {
      closeMenu();
    }
  }, [isMobile, isOpen]);

  // Evitar el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="burger-group">
      <div className="burger-group__button-container">
        <BurgerItem isOpen={isOpen} onClick={toggleMenu} />
      </div>
      {isOpen && isMobile && (
        <BurgerOverlay isOpen={isOpen} onClose={closeMenu} />
      )}
    </div>
  );
};

export default BurgerGroup;
