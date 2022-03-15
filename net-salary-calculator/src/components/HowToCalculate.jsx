import React from 'react';

import { useSelector } from 'react-redux';

import getFormattedValue from '../utils/convertValueFormat';
import {
  HOW_TO_CALCULATE_TEXT_ID,
  HOW_TO_CALCULATE_TABLE_ID,
} from '../constants/tagIds';

import '../assets/css/HowToCalculate.css';

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
      <table
        id={ HOW_TO_CALCULATE_TABLE_ID }
        className="calculate-table"
      >
        <thead>
          <tr>
            <th
              id={ HOW_TO_CALCULATE_TEXT_ID }
              className="table-header"
            >
              Como o cálculo é feito?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="table-first-column"
            >
              Salário bruto
            </td>
            <td
              className="table-second-column"
            >
              { `R$ ${formattedSalary}` }
            </td>
          </tr>
          <tr>
            <td
              className="table-first-column"
            >
              { `INSS (${formattedInssPercentual}%)` }
            </td>
            <td
              className="table-second-column"
            >
              { `- R$ ${formattedInssDeduction}` }
            </td>
          </tr>
          <tr>
            <td
              className="table-first-column"
            >
              { `IRRF (${formattedIrrfPercentual}%)` }
            </td>
            <td
              className="table-second-column"
            >
              { `- R$ ${formattedIrrfDeduction}` }
            </td>
          </tr>
          <tr>
            <td
              className="table-first-column"
            >
              Outros descontos
            </td>
            <td
              className="table-second-column"
            >
              { `- R$ ${formattedDiscount}` }
            </td>
          </tr>
          <tr className="table-line" />
          <tr>
            <td
              className="table-first-column last-row"
            >
              Salário líquido
            </td>
            <td
              className="table-second-column last-row"
            >
              { `R$ ${formattedNetSalary}` }
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default HowToCalculate;
