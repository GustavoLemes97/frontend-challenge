import React from 'react';

import Form from '../components/Form';
import CalculationResult from '../components/CalculationResult';
import HowToCalculate from '../components/HowToCalculate';

function CalculatorPage() {
  return (
    <section>
      <Form />
      <CalculationResult />
      <HowToCalculate />
    </section>
  );
}

export default CalculatorPage;
