import React from 'react';

function HowToCalculate() {
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
              R$ 0,00
            </td>
          </tr>
          <tr>
            <td>INSS (0%)</td>
            <td>-R$ 0,00</td>
          </tr>
          <tr>
            <td>IRRF (0%)</td>
            <td>-R$ 0,00</td>
          </tr>
          <tr>
            <td>Outros descontos</td>
            <td>-R$ 0,00</td>
          </tr>
          <tr>
            <td>Salário líquido</td>
            <td>-R$ 0,00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default HowToCalculate;
