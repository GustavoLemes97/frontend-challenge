import {
  FIRST_INSS_RANGE_VALUE,
  SECOND_INSS_RANGE_VALUE,
  THIRD_INSS_RANGE_VALUE,
  FOURTH_INSS_RANGE_VALUE,
  INSS_TETO_DEDUCTION,
  DEPENDENT_DEDUCTION,
  FIRST_IRRF_RANGE_VALUE,
  SECOND_IRRF_RANGE_VALUE,
  THIRD_IRRF_RANGE_VALUE,
  FOURTH_IRRF_RANGE_VALUE,
} from '../constants';

import inssValuesTable from '../helpers/inssTable';
import irrfValuesTable from '../helpers/irrfTable';

const inRange = (value, min, max) => min < value && max >= value;

const filterObjectKeys = (obj) => {
  const keys = Object.keys(obj);
  const filteredKey = keys.filter((key) => obj[key]);

  return filteredKey;
};

const getPercentual = (valueTotal, valueFraction) => {
  if (valueTotal === 0) return 0;
  return (valueFraction / valueTotal) * 100;
};

const getInssValues = (salary) => {
  const inssValues = {
    firstInssValues: salary <= FIRST_INSS_RANGE_VALUE,
    secondInssValues: inRange(
      salary,
      FIRST_INSS_RANGE_VALUE,
      SECOND_INSS_RANGE_VALUE,
    ),
    thirdInssValues: inRange(
      salary,
      SECOND_INSS_RANGE_VALUE,
      THIRD_INSS_RANGE_VALUE,
    ),
    fourthInssValues: inRange(
      salary,
      THIRD_INSS_RANGE_VALUE,
      FOURTH_INSS_RANGE_VALUE,
    ),
  };

  const inssRange = filterObjectKeys(inssValues);
  const inssPercentualAndDeduction = inssValuesTable[inssRange];

  return inssPercentualAndDeduction;
};

const getIrrfValues = (salary) => {
  const irrfValues = {
    firstIrrfValues: salary <= FIRST_IRRF_RANGE_VALUE,
    secondtIrrfValues: inRange(
      salary,
      FIRST_IRRF_RANGE_VALUE,
      SECOND_IRRF_RANGE_VALUE,
    ),
    thirdIrrfValues: inRange(
      salary,
      SECOND_IRRF_RANGE_VALUE,
      THIRD_IRRF_RANGE_VALUE,
    ),
    fourthIrrfValues: inRange(
      salary,
      THIRD_IRRF_RANGE_VALUE,
      FOURTH_IRRF_RANGE_VALUE,
    ),
    fifthIrrfValues: salary > FOURTH_IRRF_RANGE_VALUE,
  };

  const irrfRange = filterObjectKeys(irrfValues);
  const irrfPercentualAndDeduction = irrfValuesTable[irrfRange];

  return irrfPercentualAndDeduction;
};

const getINSSDeduction = (salary) => {
  if (salary > FOURTH_INSS_RANGE_VALUE) {
    return INSS_TETO_DEDUCTION;
  }
  const inssPercentualAndDeduction = getInssValues(salary);
  const inssPercentual = inssPercentualAndDeduction[0];
  const inssDeduction = inssPercentualAndDeduction[1];
  const inssInstallmentToDeduct = salary * inssPercentual - inssDeduction;

  return inssInstallmentToDeduct;
};

const getIRRFDeduction = (salary) => {
  const irrfPercentualAndDeduction = getIrrfValues(salary);
  const irrfPercentual = irrfPercentualAndDeduction[0];
  const irrfDeduction = irrfPercentualAndDeduction[1];
  const irrfInstallmentToDeduct = salary
  * irrfPercentual - irrfDeduction;

  return irrfInstallmentToDeduct;
};

const netSalaryCalculator = (salary, dependents = 0, discount = 0) => {
  const inssDetuction = getINSSDeduction(salary);
  const salaryWithInssDeduction = salary - inssDetuction;
  const salaryWithInssAndDependentsDeduction = salaryWithInssDeduction
  - dependents * DEPENDENT_DEDUCTION;
  const irrfDeduction = getIRRFDeduction(salaryWithInssAndDependentsDeduction);
  const netSalary = salaryWithInssDeduction - irrfDeduction - discount;

  const netSalaryData = {
    netSalary,
    inss: {
      deduction: inssDetuction,
      percentual: getPercentual(salary, inssDetuction),
    },
    irrf: {
      deduction: irrfDeduction,
      percentual: getPercentual(salaryWithInssDeduction, irrfDeduction),
    },
  };

  return netSalaryData;
};

export default netSalaryCalculator;
