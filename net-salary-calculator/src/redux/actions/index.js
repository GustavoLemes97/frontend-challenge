import {
  CALCULATE,
} from '../../constants/actionTypes';

const calculate = (data) => ({
  type: CALCULATE,
  payload: {
    ...data,
  },
});

export default calculate;
