import React from 'react';
import { string, number, func } from 'prop-types';

import CurrencyInput from 'react-currency-input';

import { question } from '../assets/images';

function Input({
  inputValue,
  labelId,
  inputId,
  questionId,
  label,
  name,
  questionCircleText,
  handleChange,
  labelClassName,
  inputClassName,
  inputQuestionClassName,
  inputGroupClassName,
  inputSectionClassName,
}) {
  return (
    <section className={ inputSectionClassName }>
      <label
        id={ labelId }
        htmlFor={ label }
        className={ labelClassName }
      >
        {label}
        <div className="input-group">
          <span className={ inputGroupClassName }>R$</span>
          <CurrencyInput
            id={ inputId }
            name={ name }
            value={ inputValue }
            placeholder="0,00"
            thousandSeparator="."
            decimalSeparator=","
            onChangeEvent={ handleChange }
            className={ inputClassName }
          />
        </div>
      </label>
      <div
        className={ inputQuestionClassName }
        id={ questionId }
      >
        <img src={ question } alt={ questionCircleText } />
        <span>{ questionCircleText }</span>
      </div>
    </section>
  );
}

export default Input;

Input.propTypes = {
  labelId: string.isRequired,
  inputId: string.isRequired,
  questionId: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  inputValue: number.isRequired,
  questionCircleText: string.isRequired,
  handleChange: func.isRequired,
  labelClassName: string.isRequired,
  inputClassName: string.isRequired,
  inputQuestionClassName: string.isRequired,
  inputGroupClassName: string.isRequired,
  inputSectionClassName: string.isRequired,
};
