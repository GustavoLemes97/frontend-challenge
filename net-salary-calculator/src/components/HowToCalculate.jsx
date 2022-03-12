import React from 'react';

import { useSelector } from 'react-redux';

import getFormattedValue from '../utils/convertValueFormat';

function HowToCalculate() {
  const {
    salary,
    discount,
    netSalaryData,
  } = useSelector(({ calculator }) => calculator);
  const {
    netSalary,
    inss: {
      deduction: inssDeduction,
      percentual: inssPercentual,
    },
    irrf: {
      deduction: irrfDeduction,
      percentual: irrfPercentual,
    },
  } = netSalaryData;

  const formattedSalary = getFormattedValue(salary);
  const formattedNetSalary = getFormattedValue(netSalary);
  const formattedDiscount = getFormattedValue(discount);
  const formattedInssDeduction = getFormattedValue(inssDeduction);
  const formattedInssPercentual = getFormattedValue(inssPercentual);
  const formattedIrrfDeduction = getFormattedValue(irrfDeduction);
  const formattedIrrfPercentual = getFormattedValue(irrfPercentual);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Como o cálculo é feito?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário bruto</td>
            <td>
              { `R$ ${formattedSalary}` }
            </td>
          </tr>
          <tr>
            <td>{ `INSS (${formattedInssPercentual}%)` }</td>
            <td>{ `- R$ ${formattedInssDeduction}` }</td>
          </tr>
          <tr>
            <td>{ `IRRF (${formattedIrrfPercentual}%)` }</td>
            <td>{ `- R$ ${formattedIrrfDeduction}` }</td>
          </tr>
          <tr>
            <td>Outros descontos</td>
            <td>{ `- R$ ${formattedDiscount}` }</td>
          </tr>
          <tr>
            <td>Salário líquido</td>
            <td>{ `R$ ${formattedNetSalary}` }</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default HowToCalculate;
