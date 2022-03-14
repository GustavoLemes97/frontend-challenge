import React from 'react';

import { useSelector } from 'react-redux';

import getFormattedValue from '../utils/convertValueFormat';

import '../assets/css/CalculationResult.css';

function CalculationResult() {
  const { netSalary } = useSelector(({ calculator: { netSalaryData } }) => netSalaryData);
  const formattedSalary = getFormattedValue(netSalary);

  return (
    <p className="net-salary-p">
      Seu salário líquido será
      <span className="net-salary-img">
        <span className=" net-salary-span abbreviation-span">
          R$
        </span>
        <span className="net-salary-span">
          { formattedSalary }
        </span>
      </span>
    </p>
  );
}

export default CalculationResult;
