import React from 'react';
import { string, func } from 'prop-types';

import { question } from '../assets/images';

function Input({
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
        htmlFor={ label }
        className={ labelClassName }
      >
        {label}
        <div className="input-group">
          <span className={ inputGroupClassName }>R$</span>
          <input
            id={ label }
            name={ name }
            type="number"
            placeholder="0,00"
            onChange={ handleChange }
            className={ inputClassName }
          />
        </div>
      </label>
      <div className={ inputQuestionClassName }>
        <img src={ question } alt={ questionCircleText } />
        <span>{ questionCircleText }</span>
      </div>
    </section>
  );
}

export default Input;

Input.propTypes = {
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
