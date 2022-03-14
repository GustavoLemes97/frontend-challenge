import React from 'react';
import { render, screen, configure } from '@testing-library/react';

import { formsProps } from '../helpers/componentsProps';

import Button from '../components/Button';

import {
  BUTTON_ID,
} from '../constants/tagIds';

configure({ testIdAttribute: 'id' });

const { buttonProps } = formsProps;

describe('Create a Button with the following characteristics', () => {
  test('Verify if the button to be with correct characteristics', () => {
    render(<Button { ...buttonProps(() => {}) } />);
    const button = screen.getByTestId(BUTTON_ID.calculateButton);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('CALCULAR');
  });
});
