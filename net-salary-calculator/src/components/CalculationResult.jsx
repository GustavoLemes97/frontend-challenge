import React from 'react';

import { useSelector } from 'react-redux';

import getFormattedValue from '../utils/convertValueFormat';
import {
  CALCULATE_RESULT_TEXT_ID,
  ABBREVIATION_TEXT_ID,
  CALCULATE_NET_SALARY_TEXT_ID,
} from '../constants/tagIds';

import '../assets/css/CalculationResult.css';

function CalculationResult() {
  const { netSalary } = useSelector(({ calculator: { netSalaryData } }) => netSalaryData);
  const formattedSalary = getFormattedValue(netSalary);

  return (
    <p className="net-salary-p">
      <span id={ CALCULATE_RESULT_TEXT_ID }>Seu salário líquido será</span>
      <span className="net-salary-img">
        <span
          id={ ABBREVIATION_TEXT_ID }
          className="net-salary-span abbreviation-span"
        >
          R$
        </span>
        <span
          id={ CALCULATE_NET_SALARY_TEXT_ID }
          className="net-salary-span"
        >
          { formattedSalary }
        </span>
      </span>
    </p>
  );
}

export default CalculationResult;
