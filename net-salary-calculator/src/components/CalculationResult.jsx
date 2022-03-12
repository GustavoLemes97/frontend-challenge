import React from 'react';

import { useSelector } from 'react-redux';

import getFormattedValue from '../utils/convertValueFormat';

function CalculationResult() {
  const { netSalary } = useSelector(({ calculator: { netSalaryData } }) => netSalaryData);
  const formattedSalary = getFormattedValue(netSalary);

  return (
    <p>
      Seu salário líquido será:
      {' '}
      <span>
        { `R$ ${formattedSalary}` }
      </span>
    </p>
  );
}

export default CalculationResult;
