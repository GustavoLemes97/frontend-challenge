import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import calculate from '../redux/actions';

import netSalaryCalculator from '../utils/netSalaryCalculator';
import { formsProps } from '../helpers/componentsProps';

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

  const {
    salaryInputProps,
    discountInputProps,
    addRemoveInputProps,
    buttonProps,
  } = formsProps;
  return (
    <form>
      <Input
        { ...salaryInputProps(handleChange) }
      />
      <Input
        { ...discountInputProps(handleChange) }
      />
      <AddRemoveInput
        { ...addRemoveInputProps(handleChange, { dependents, setDependents }) }
      />
      <Button
        { ...buttonProps(handleCalculate) }
      />
    </form>
  );
}

export default Form;
