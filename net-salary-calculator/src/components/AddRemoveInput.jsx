import React from 'react';
import { string, number, func, shape } from 'prop-types';

import { addRemoveButtonProps } from '../helpers/componentsProps';

import AddRemoveButton from './AddRemoveButton';

import { question } from '../assets/images';
import '../assets/css/Button.css';
import '../assets/css/AddRemoveInput.css';

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
  const {
    removeButton,
    addButton,
  } = addRemoveButtonProps;
  return (
    <section className="add-remove-section">
      <label
        id="dependents-label"
        htmlFor={ label }
        className="add-remove-input-label"
      >
        {label}
        <div className="add-remove-input-div">
          <AddRemoveButton
            { ...removeButton(handleMinusClick) }
          />
          <input
            id="dependents-input"
            name={ name }
            type="number"
            placeholder="0"
            value={ dependents }
            onChange={ handleChange }
            className="add-remove-input"
          />
          <AddRemoveButton
            { ...addButton(handlePlusClick) }
          />
        </div>
      </label>
      <div className="add-remove-input-question">
        <img
          className="add-remove-input-question-img"
          src={ question }
          alt={ questionCircleText }
        />
        <span
          id="dependents-question"
          className="add-remove-input-question-span"
        >
          { questionCircleText }
        </span>
      </div>
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
