import React from 'react';
import { screen, configure } from '@testing-library/react';

import renderWithRedux from './testConfig';

import HowToCalculate from '../components/HowToCalculate';

import {
  HOW_TO_CALCULATE_TEXT_ID,
  HOW_TO_CALCULATE_TABLE_ID,
  INITIAL_TEST_STATE,
  EXPECTED_TEST_STATE,
} from '../constants';

configure({ testIdAttribute: 'id' });

describe('Create a Component showing how to calculat the net salary', () => {
  test('Verify if the text "Como o cálculo é feito?" to be in the component', () => {
    renderWithRedux(<HowToCalculate />, { initialState: INITIAL_TEST_STATE });
    const text = screen.getByTestId(HOW_TO_CALCULATE_TEXT_ID);

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Como o cálculo é feito?');
  });

  test('Verify table rows content in the component', () => {
    const { queryAllByRole } = renderWithRedux(
      <HowToCalculate />,
      { initialState: EXPECTED_TEST_STATE },
    );
    const table = screen.getByTestId(HOW_TO_CALCULATE_TABLE_ID);
    const tableRows = queryAllByRole('row');
    const TABLE_LENGTH = 7;

    expect(table).toBeInTheDocument();
    expect(tableRows).toHaveLength(TABLE_LENGTH);
    expect(tableRows[1]).toHaveTextContent('Salário bruto');
    expect(tableRows[1]).toHaveTextContent('R$ 2.800,00');
    expect(tableRows[2]).toHaveTextContent('INSS (8,75%)');
    expect(tableRows[2]).toHaveTextContent('- R$ 245,00');
    expect(tableRows[3]).toHaveTextContent('IRRF (0,24%)');
    expect(tableRows[3]).toHaveTextContent('- R$ 6,17');
    expect(tableRows[4]).toHaveTextContent('Outros descontos');
    expect(tableRows[4]).toHaveTextContent('- R$ 150,00');
    expect(tableRows[6]).toHaveTextContent('Salário líquido');
    expect(tableRows[6]).toHaveTextContent('R$ 2.398,83');
  });
});
