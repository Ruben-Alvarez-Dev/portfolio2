import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ to, children }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-item__link">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
