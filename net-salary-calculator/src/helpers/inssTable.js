import {
  FIRST_ALIQUOT,
  SECOND_ALIQUOT,
  THIRD_ALIQUOT,
  FOURTH_ALIQUOT,
  FIRST_INSS_DEDUCTION,
  SECOND_INSS_DEDUCTION,
  THIRD_INSS_DEDUCTION,
  FOURTH_INSS_DEDUCTION,
} from '../constants/inss';

const INSS_VALUES = {
  firstInssValues: [FIRST_ALIQUOT, FIRST_INSS_DEDUCTION],
  secondInssValues: [SECOND_ALIQUOT, SECOND_INSS_DEDUCTION],
  thirdInssValues: [THIRD_ALIQUOT, THIRD_INSS_DEDUCTION],
  fourthInssValues: [FOURTH_ALIQUOT, FOURTH_INSS_DEDUCTION],
};

export default INSS_VALUES;