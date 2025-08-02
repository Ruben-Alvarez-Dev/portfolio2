import React from 'react';
import './Footer.css';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__logo">Dev Portfolio</h3>
            <p className="footer__description">
              Creando soluciones digitales modernas y eficientes
            </p>
          </div>
          
          <div className="footer__navigation">
            <ul className="footer__nav-list">
              <li><a href="#" className="footer__nav-link">Inicio</a></li>
              <li><a href="#" className="footer__nav-link">Proyectos</a></li>
              <li><a href="#" className="footer__nav-link">Sobre mí</a></li>
              <li><a href="#" className="footer__nav-link">Contacto</a></li>
            </ul>
            
            <div className="footer__social">
              <a href="#" className="footer__social-link" title="GitHub">
                <GithubIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="LinkedIn">
                <LinkedInIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="Twitter">
                <TwitterIcon className="footer__social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Dev Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
