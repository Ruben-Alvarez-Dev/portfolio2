import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavbarGroup.css';

/**
 * Navigation items configuration
 * @type {Array<{to: string, label: string}>}
 */
const navItems = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
];

/**
 * Navbar group component
 * Contains navigation items
 */
const NavbarGroup = () => {
  return (
    <nav className="header__navbarGroup">
      <ul className="navbar__list">
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarGroup;
