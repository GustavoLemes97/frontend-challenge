import React from 'react';
import { render, screen, configure } from '@testing-library/react';

import Input from '../components/Input';

import {
  INPUT_ID,
  INPUT_LABEL_ID,
  INPUT_QUESTION_TEXT_ID,
} from '../constants/tagIds';

configure({ testIdAttribute: 'id' });

const inputProps = {
  inputId: INPUT_ID.salaryInput,
  labelId: INPUT_LABEL_ID.salaryLabel,
  questionId: INPUT_QUESTION_TEXT_ID.salaryQuestion,
  label: 'testLabel',
  name: 'testName',
  questionCircleText: 'testQuestionText',
  handleChange: () => {},
  labelClassName: '',
  inputClassName: '',
  inputQuestionClassName: '',
  inputGroupClassName: '',
  inputSectionClassName: '',
};

describe('Create an Input with the following characteristics', () => {
  test('Verify if the input to be with correct characteristics', () => {
    render(<Input { ...inputProps } />);
    const input = screen.getByTestId(INPUT_ID.salaryInput);
    const inputPlaceHolder = screen
      .getByTestId(INPUT_ID.salaryInput).getAttribute('placeholder');

    expect(input).toBeInTheDocument();
    expect(inputPlaceHolder).toBe('0,00');
  });

  test('Verify if the input label to be with correct characteristics', () => {
    render(<Input { ...inputProps } />);
    const label = screen.getByTestId(INPUT_LABEL_ID.salaryLabel);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('testLabel');
  });

  test('Verify if the input question to be with correct characteristics', () => {
    render(<Input { ...inputProps } />);
    const question = screen.getByTestId(INPUT_QUESTION_TEXT_ID.salaryQuestion);

    expect(question).toBeInTheDocument();
    expect(question).toHaveTextContent('testQuestionText');
  });
});