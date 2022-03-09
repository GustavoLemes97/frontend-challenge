import React from 'react';
import { string, func } from 'prop-types';

function Button({ buttonText, handleClick }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      { buttonText }
    </button>
  );
}

export default Button;

Button.propTypes = {
  buttonText: string.isRequired,
  handleClick: func.isRequired,
};
