import React from 'react';
import { string, func } from 'prop-types';

import { question } from '../assets/images';

function Input({
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
          <input
            id={ inputId }
            name={ name }
            type="number"
            placeholder="0,00"
            onChange={ handleChange }
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
  questionCircleText: string.isRequired,
  handleChange: func.isRequired,
  labelClassName: string.isRequired,
  inputClassName: string.isRequired,
  inputQuestionClassName: string.isRequired,
  inputGroupClassName: string.isRequired,
  inputSectionClassName: string.isRequired,
};
