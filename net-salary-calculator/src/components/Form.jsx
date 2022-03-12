import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import calculate from '../redux/actions';

import netSalaryCalculator from '../utils/netSalaryCalculator';

import Input from './Input';
import Button from './Button';
import AddRemoveInput from './AddRemoveInput';

function Form() {
  const dispatch = useDispatch();
  const [salary, setSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const inputSetter = {
    salary: (value) => setSalary(value),
    discount: (value) => setDiscount(value),
    dependents: (value) => setDependents(value),
  };

  const handleChange = ({ target: { name, value } }) => {
    inputSetter[name](Number(value));
  };

  const handleCalculate = () => {
    const netSalaryData = netSalaryCalculator(salary, dependents, discount);
    const dataObject = {
      salary,
      dependents,
      discount,
      netSalaryData,
    };

    dispatch(calculate(dataObject));
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
        dependentsState={ { dependents, setDependents } }
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
