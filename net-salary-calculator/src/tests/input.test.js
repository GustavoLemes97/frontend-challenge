import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, configure } from '@testing-library/react';

import { formsProps } from '../helpers/componentsProps';

import Input from '../components/Input';

import {
  INPUT_ID,
  INPUT_LABEL_ID,
  INPUT_QUESTION_TEXT_ID,
} from '../constants';

configure({ testIdAttribute: 'id' });

const { salaryInputProps, discountInputProps } = formsProps;

describe('Create an Input with the following characteristics', () => {
  test('Verify if the input to be with correct characteristics', () => {
    render(<Input { ...salaryInputProps(() => {}) } />);
    const input = screen.getByTestId(INPUT_ID.salaryInput);
    const inputPlaceHolder = screen
      .getByTestId(INPUT_ID.salaryInput).getAttribute('placeholder');

    expect(input).toBeInTheDocument();
    expect(inputPlaceHolder).toBe('0,00');
  });

  test('Verify if the input label to be with correct characteristics', () => {
    render(<Input { ...salaryInputProps(() => {}) } />);
    const label = screen.getByTestId(INPUT_LABEL_ID.salaryLabel);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Qual seu salário bruto?');
  });

  test('Verify if the input question to be with correct characteristics', () => {
    render(<Input { ...salaryInputProps(() => {}) } />);
    const question = screen.getByTestId(INPUT_QUESTION_TEXT_ID.salaryQuestion);

    expect(question).toBeInTheDocument();
    expect(question).toHaveTextContent('Salário bruto sem descontos');
  });

  test('Verify if the salary input has the correct format', () => {
    render(<Input { ...salaryInputProps(() => {}) } />);
    const input = screen.getByTestId(INPUT_ID.salaryInput);

    userEvent.type(input, '1');
    expect(input.value).toEqual('0,01');
    userEvent.type(input, '1');
    expect(input.value).toEqual('0,11');
    userEvent.type(input, '1');
    expect(input.value).toEqual('1,11');
  });

  test('Verify if the discount input has the correct format', () => {
    render(<Input { ...discountInputProps(() => {}) } />);
    const input = screen.getByTestId(INPUT_ID.discountInput);

    userEvent.type(input, '1');
    expect(input.value).toEqual('0,01');
    userEvent.type(input, '1');
    expect(input.value).toEqual('0,11');
    userEvent.type(input, '1');
    expect(input.value).toEqual('1,11');
  });
});
