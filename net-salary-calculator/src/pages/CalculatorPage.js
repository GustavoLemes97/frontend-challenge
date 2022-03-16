import React from 'react';

import {
  Header,
  Form,
  CalculationResult,
  HowToCalculate,
} from '../components';

function CalculatorPage() {
  return (
    <section>
      <Header />
      <Form />
      <CalculationResult />
      <HowToCalculate />
    </section>
  );
}

export default CalculatorPage;
