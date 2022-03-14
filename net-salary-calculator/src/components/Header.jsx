import React from 'react';

import { logo } from '../assets/images';
import '../assets/css/Header.css';

function Header() {
  return (
    <header>
      <img
        src={ logo }
        alt="Logo da Agilize"
        className="img-logo"
      />
      <h1
        className="header-text"
      >
        Calculadora de salário líquido
      </h1>
    </header>
  );
}

export default Header;
