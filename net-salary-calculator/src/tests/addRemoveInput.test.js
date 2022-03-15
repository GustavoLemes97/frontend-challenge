import React from 'react';
import { render, screen, configure } from '@testing-library/react';

import { formsProps } from '../helpers/componentsProps';

import AddRemoveInput from '../components/AddRemoveInput';

import {
  INPUT_ID,
  INPUT_LABEL_ID,
  INPUT_QUESTION_TEXT_ID,
} from '../constants/tagIds';

configure({ testIdAttribute: 'id' });

const { addRemoveInputProps } = formsProps;
const DEPENDENTS_STATE = {
  dependents: 0,
  setDependents: () => {},
};

describe('Create an AddRemoveInput with the following characteristics', () => {
  test('Verify if the AddRemoveInput to be with correct characteristics', () => {
    render(<AddRemoveInput { ...addRemoveInputProps(() => {}, DEPENDENTS_STATE) } />);
    const input = screen.getByTestId(INPUT_ID.dependentsInput);
    const inputPlaceHolder = screen
      .getByTestId(INPUT_ID.dependentsInput).getAttribute('placeholder');

    expect(input).toBeInTheDocument();
    expect(inputPlaceHolder).toBe('0');
  });

  test('Verify if the AddRemoveInput label to be with correct characteristics', () => {
    render(<AddRemoveInput { ...addRemoveInputProps(() => {}, DEPENDENTS_STATE) } />);
    const label = screen.getByTestId(INPUT_LABEL_ID.dependentsLabel);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Quantos dependentes você tem?');
  });

  test('Verify if the AddRemoveInput question to be with correct characteristics', () => {
    render(<AddRemoveInput { ...addRemoveInputProps(() => {}, DEPENDENTS_STATE) } />);
    const question = screen.getByTestId(INPUT_QUESTION_TEXT_ID.dependentsQuestion);

    expect(question).toBeInTheDocument();
    expect(question).toHaveTextContent('Dependentes declarados no Imposto de Renda');
  });
});
