import React from 'react';
import { string, number, func, shape } from 'prop-types';

import Button from './Button';

function AddRemoveInput({
  label,
  name,
  questionCircleText,
  handleChange,
  dependentsState }) {
  const { dependents, setDependents } = dependentsState;
  const handlePlusClick = () => {
    setDependents(dependents + 1);
  };

  const handleMinusClick = () => {
    if (dependents === 0) {
      setDependents(0);
    } else {
      setDependents(dependents - 1);
    }
  };

  return (
    <section>
      <label htmlFor={ label }>
        {label}
        <Button
          buttonText="-"
          handleClick={ handleMinusClick }
        />
        <input
          id={ label }
          name={ name }
          type="number"
          placeholder="0"
          value={ dependents }
          onChange={ handleChange }
        />
      </label>
      <Button
        buttonText="+"
        handleClick={ handlePlusClick }
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
  dependentsState: shape({
    dependents: number.isRequired,
    setDependents: func.isRequired,
  }).isRequired,
};
