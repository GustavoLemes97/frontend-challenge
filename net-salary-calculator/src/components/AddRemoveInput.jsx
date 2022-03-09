import React from 'react';
import { string, func } from 'prop-types';

import Button from './Button';

function AddRemoveInput({ label, name, questionCircleText, handleChange }) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <section>
      <label htmlFor={ label }>
        {label}
        <Button
          buttonText="-"
          handleClick={ handleClick }
        />
        <input
          id={ label }
          name={ name }
          type="number"
          placeholder="0"
          onChange={ handleChange }
        />
      </label>
      <Button
        buttonText="+"
        handleClick={ handleClick }
      />
      <span>
        { questionCircleText }
      </span>
    </section>
  );
}

export default AddRemoveInput;

AddRemoveInput.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  questionCircleText: string.isRequired,
  handleChange: func.isRequired,
};
