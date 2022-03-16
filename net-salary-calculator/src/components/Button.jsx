import React from 'react';
import { string, func } from 'prop-types';

function Button({ buttonId, buttonText, handleClick, buttonClassName }) {
  return (
    <button
      id={ buttonId }
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
  buttonId: string.isRequired,
  buttonText: string.isRequired,
  handleClick: func.isRequired,
  buttonClassName: string.isRequired,
};
