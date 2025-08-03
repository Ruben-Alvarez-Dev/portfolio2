import React from 'react';
import './Footer.css';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import EmailIcon from './icons/EmailIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <h3 className="footer__name">Rubén Álvarez <span className="footer__portfolio">Dev Portfolio</span></h3>
            <p className="footer__description">
              Analista Técnico, Scrum Master y Fullstack Developer
            </p>
          </div>
          
          <nav className="footer__navigation">
            <ul className="footer__nav-list">
              <li><a href="#" className="footer__nav-link">Inicio</a></li>
              <li><a href="#" className="footer__nav-link">Proyectos</a></li>
              <li><a href="#" className="footer__nav-link">Sobre mí</a></li>
              <li><a href="#" className="footer__nav-link">Contacto</a></li>
            </ul>
            
            <div className="footer__social">
              <a href="#" className="footer__social-link" title="WhatsApp" aria-label="WhatsApp">
                <WhatsAppIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="Email" aria-label="Email">
                <EmailIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="LinkedIn" aria-label="LinkedIn">
                <LinkedInIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="GitHub" aria-label="GitHub">
                <GithubIcon className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" title="Twitter" aria-label="Twitter">
                <TwitterIcon className="footer__social-icon" />
              </a>
            </div>
          </nav>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Rubén Álvarez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
