import React from 'react';
import LogoImage from './LogoImage/LogoImage';
import LogoTitle from './LogoTitle/LogoTitle';
import './LogoGroup.css';

const LogoGroup = () => {
  return (
    <div className="header__logoGroup">
      <LogoImage />
      <LogoTitle />
    </div>
  );
};

export default LogoGroup;
