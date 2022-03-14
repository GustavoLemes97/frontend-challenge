import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import calculate from '../redux/actions';

import netSalaryCalculator from '../utils/netSalaryCalculator';

import Input from './Input';
import Button from './Button';
import AddRemoveInput from './AddRemoveInput';

import '../assets/css/Form.css';
import '../assets/css/Input.css';
import '../assets/css/Button.css';

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
      <Input
        label="Qual seu salário bruto?"
        name="salary"
        questionCircleText="Salário bruto sem descontos"
        handleChange={ handleChange }
        labelClassName="first-input-label"
        inputClassName="first-input"
        inputQuestionClassName="first-input-question"
        inputGroupClassName="first-input-group-text"
        inputSectionClassName="first-input-section"
      />
      <Input
        label="Total de descontos"
        name="discount"
        questionCircleText="Pensão alimentícia, plano de saúde..."
        handleChange={ handleChange }
        labelClassName="second-input-label"
        inputClassName="second-input"
        inputQuestionClassName="second-input-question"
        inputGroupClassName="second-input-group-text"
        inputSectionClassName="second-input-section"
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
        buttonClassName="calculate-button"
      />
    </form>
  );
}

export default Form;
