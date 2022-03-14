import React from 'react';

import {
  HEADER_TEXT_ID,
  HEADER_LOGO_ID,
} from '../constants/tagIds';

import { logo } from '../assets/images';
import '../assets/css/Header.css';

function Header() {
  return (
    <header>
      <img
        src={ logo }
        alt="Logo da Agilize"
        className="img-logo"
        id={ HEADER_LOGO_ID }
      />
      <h1
        className="header-text"
        id={ HEADER_TEXT_ID }
      >
        Calculadora de salário líquido
      </h1>
    </header>
  );
}

export default Header;
