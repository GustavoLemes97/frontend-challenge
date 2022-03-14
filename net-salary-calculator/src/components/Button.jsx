import React from 'react';
import { string, func } from 'prop-types';

function Button({ buttonText, handleClick, buttonClassName }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      className={ buttonClassName }
    >
      { buttonText }
    </button>
  );
}

export default Button;

Button.propTypes = {
  buttonText: string.isRequired,
  handleClick: func.isRequired,
  buttonClassName: string.isRequired,
};
