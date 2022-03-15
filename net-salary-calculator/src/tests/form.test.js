import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, configure } from '@testing-library/react';

import renderWithRedux from './testConfig';

import Form from '../components/Form';

import {
  INPUT_ID,
  BUTTON_ID,
} from '../constants/tagIds';

configure({ testIdAttribute: 'id' });

const INITIAL_STATE = {
  calculator: {
    salary: 0,
    dependents: 0,
    discount: 0,
    netSalaryData: {
      netSalary: 0,
      inss: {
        deduction: 0,
        percentual: 0,
      },
      irrf: {
        deduction: 0,
        percentual: 0,
      },
    },
  },
};

const EXPECTED_STATE = {
  calculator: {
    dependents: 3,
    discount: 150,
    netSalaryData: {
      inss: {
        deduction: 245,
        percentual: 8.75,
      },
      irrf: {
        deduction: 6.167249999999996,
        percentual: 0.24137964774951062,
      },
      netSalary: 2398.83275,
    },
    salary: 2800,
  },
};

describe('Create a Form to receive data and to calculate the net salary', () => {
  test('Verify if state is initial when component render for the first time', () => {
    const { store } = renderWithRedux(<Form />, { initialState: INITIAL_STATE });

    const startedState = store.getState();
    expect(startedState).toEqual(INITIAL_STATE);
  });

  test(
    'Verify if state change correctly when data'
    + 'is submitted using dependets` increment/decrement button',
    () => {
      const { store } = renderWithRedux(<Form />, { initialState: INITIAL_STATE });
      const salaryInput = screen.getByTestId(INPUT_ID.salaryInput);
      const discountInput = screen.getByTestId(INPUT_ID.discountInput);
      const calculateButton = screen.getByTestId(BUTTON_ID.calculateButton);
      const decrementButton = screen.getByTestId(BUTTON_ID.removeButton);
      const incrementButton = screen.getByTestId(BUTTON_ID.addButton);

      const startedState = store.getState();
      expect(startedState).toEqual(INITIAL_STATE);

      userEvent.type(salaryInput, '2800,00');
      userEvent.type(discountInput, '150,00');
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(decrementButton);
      fireEvent.click(calculateButton);
      const currentState = store.getState();

      expect(currentState).toEqual(EXPECTED_STATE);
    },
  );

  test(
    'Verify if state change correctly when'
    + 'data is submitted typing on dependets` input', () => {
      const { store } = renderWithRedux(<Form />, { initialState: INITIAL_STATE });
      const salaryInput = screen.getByTestId(INPUT_ID.salaryInput);
      const discountInput = screen.getByTestId(INPUT_ID.discountInput);
      const dependentsInput = screen.getByTestId(INPUT_ID.dependentsInput);
      const calculateButton = screen.getByTestId(BUTTON_ID.calculateButton);

      const startedState = store.getState();
      expect(startedState).toEqual(INITIAL_STATE);

      userEvent.type(salaryInput, '2800,00');
      userEvent.type(discountInput, '150,00');
      userEvent.type(dependentsInput, '3');
      fireEvent.click(calculateButton);
      const currentState = store.getState();

      expect(currentState).toEqual(EXPECTED_STATE);
    },
  );
});
