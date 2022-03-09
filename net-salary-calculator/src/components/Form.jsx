import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';
import AddRemoveInput from './AddRemoveInput';

function Form() {
  const [salary, setSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const inputsSetters = {
    salary: (value) => setSalary(value),
    discount: (value) => setDiscount(value),
    dependents: (value) => setDependents(value),
  };

  const handleChange = ({ target: { name, value } }) => {
    inputsSetters[name](Number(value));
  };

  const handleCalculate = () => {
    const dataObject = {
      salary,
      dependents,
      discount,
    };

    console.log(dataObject);
  };

  return (
    <form>
      <h1>Calculadora de salário líquido</h1>
      <Input
        label="Qual seu salário bruto?"
        name="salary"
        questionCircleText="Salário bruto sem descontos"
        handleChange={ handleChange }
      />
      <Input
        label="Total de descontos"
        name="discount"
        questionCircleText="Pensão alimentícia, plano de saúde..."
        handleChange={ handleChange }
      />
      <AddRemoveInput
        label="Quantos dependentes você tem?"
        name="dependents"
        questionCircleText="Dependentes declarados no Imposto de Renda"
        handleChange={ handleChange }
      />
      <Button
        buttonText="CALCULAR"
        handleClick={ handleCalculate }
      />
    </form>
  );
}

export default Form;
