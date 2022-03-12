import React from 'react';
import { string, func } from 'prop-types';

function Input({ label, name, questionCircleText, handleChange }) {
  return (
    <section>
      <label htmlFor={ label }>
        {label}
        <input
          id={ label }
          name={ name }
          type="number"
          placeholder="0,00"
          onChange={ handleChange }
        />
      </label>
      <span>
        { questionCircleText }
      </span>
    </section>
  );
}

export default Input;

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  questionCircleText: string.isRequired,
  handleChange: func.isRequired,
};
