import React from 'react';
import { string, func } from 'prop-types';

import { plus, minus } from '../assets/images';

function AddRemoveButton({ buttonId, buttonType, handleClick, buttonClassName }) {
  const buttonData = {
    add: {
      image: plus,
      alt: 'Plus Button',
    },
    remove: {
      image: minus,
      alt: 'Minus Button',
    },
  };

  const { image, alt } = buttonData[buttonType];

  return (
    <button
      id={ buttonId }
      type="button"
      onClick={ handleClick }
      className={ buttonClassName }
    >
      <img src={ image } alt={ alt } />
    </button>
  );
}

export default AddRemoveButton;

AddRemoveButton.propTypes = {
  buttonId: string.isRequired,
  buttonType: string.isRequired,
  handleClick: func.isRequired,
  buttonClassName: string.isRequired,
};
