import React from 'react';
import { render, screen, configure } from '@testing-library/react';

import Header from '../components/Header';

import {
  HEADER_TEXT_ID,
  HEADER_LOGO_ID,
} from '../constants';

configure({ testIdAttribute: 'id' });

describe('Create a Header with the following characteristics', () => {
  test('Verify if the text "Calculadora de salário líquido" to be in the header', () => {
    render(<Header />);
    const text = screen.getByTestId(HEADER_TEXT_ID);

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Calculadora de salário líquido');
  });

  test('Verify if the logo exists in the header', () => {
    render(<Header />);
    const logo = screen.getByTestId(HEADER_LOGO_ID);

    expect(logo).toBeInTheDocument();
  });
});
