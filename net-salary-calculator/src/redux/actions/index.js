import {
  CALCULATE,
} from '../../constants';

const calculate = (data) => ({
  type: CALCULATE,
  payload: {
    ...data,
  },
});

export default calculate;
