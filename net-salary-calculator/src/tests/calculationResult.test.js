import React from 'react';
import { screen, configure } from '@testing-library/react';

import renderWithRedux from './testConfig';

import CalculationResult from '../components/CalculationResult';

import {
  CALCULATE_RESULT_TEXT_ID,
  ABBREVIATION_TEXT_ID,
  CALCULATE_NET_SALARY_TEXT_ID,
  EXPECTED_TEST_STATE,
} from '../constants';

configure({ testIdAttribute: 'id' });

describe('Create a Component with the calculate result', () => {
  test('Verify if the text "Seu salário líquido será" to be in the component', () => {
    renderWithRedux(<CalculationResult />, { initialState: EXPECTED_TEST_STATE });
    const text = screen.getByTestId(CALCULATE_RESULT_TEXT_ID);

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Seu salário líquido será');
  });

  test('Verify if the text "R$" to be in the component', () => {
    renderWithRedux(<CalculationResult />, { initialState: EXPECTED_TEST_STATE });
    const abbreviationText = screen.getByTestId(ABBREVIATION_TEXT_ID);

    expect(abbreviationText).toBeInTheDocument();
    expect(abbreviationText).toHaveTextContent('R$');
  });

  test('Verify if the net salary to be in the component', () => {
    renderWithRedux(<CalculationResult />, { initialState: EXPECTED_TEST_STATE });
    const netSalaryResult = screen.getByTestId(CALCULATE_NET_SALARY_TEXT_ID);

    expect(netSalaryResult).toBeInTheDocument();
    expect(netSalaryResult).toHaveTextContent('2.398,83');
  });
});
