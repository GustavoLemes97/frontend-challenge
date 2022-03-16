import {
  CALCULATE,
  INITIAL_STATE,
} from '../../constants';

const calculator = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CALCULATE:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default calculator;
