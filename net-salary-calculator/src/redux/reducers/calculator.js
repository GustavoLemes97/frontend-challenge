import {
  CALCULATE,
} from '../../constants/actionTypes';

const INITIAL_STATE = {
  salary: 0,
  dependents: 0,
  discount: 0,
  netSalaryData: {
    netSalary: 0,
    inss: {
      deduction: 0,
      percentual: 0,
    },
    irrf: {
      deduction: 0,
      percentual: 0,
    },
  },
};

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
