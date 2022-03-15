import {
  INPUT_ID,
  INPUT_LABEL_ID,
  INPUT_QUESTION_TEXT_ID,
  BUTTON_ID,
} from '../constants/tagIds';

const formsProps = {
  salaryInputProps: (callback, value = 0) => ({
    inputValue: value,
    inputId: INPUT_ID.salaryInput,
    labelId: INPUT_LABEL_ID.salaryLabel,
    questionId: INPUT_QUESTION_TEXT_ID.salaryQuestion,
    label: 'Qual seu salário bruto?',
    name: 'salary',
    questionCircleText: 'Salário bruto sem descontos',
    labelClassName: 'first-input-label',
    inputClassName: 'first-input',
    inputQuestionClassName: 'first-input-question',
    inputGroupClassName: 'first-input-group-text',
    inputSectionClassName: 'first-input-section',
    handleChange: callback,
  }),
  discountInputProps: (callback, value = 0) => ({
    inputValue: value,
    inputId: INPUT_ID.discountInput,
    labelId: INPUT_LABEL_ID.discountLabel,
    questionId: INPUT_QUESTION_TEXT_ID.discountQuestion,
    label: 'Total de descontos',
    name: 'discount',
    questionCircleText: 'Pensão alimentícia, plano de saúde...',
    labelClassName: 'second-input-label',
    inputClassName: 'second-input',
    inputQuestionClassName: 'second-input-question',
    inputGroupClassName: 'second-input-group-text',
    inputSectionClassName: 'second-input-section',
    handleChange: callback,
  }),
  addRemoveInputProps: (callback, dependentsState) => ({
    label: 'Quantos dependentes você tem?',
    name: 'dependents',
    questionCircleText: 'Dependentes declarados no Imposto de Renda',
    dependentsState,
    handleChange: callback,
  }),
  buttonProps: (callback) => ({
    buttonId: BUTTON_ID.calculateButton,
    buttonText: 'CALCULAR',
    buttonClassName: 'calculate-button',
    handleClick: callback,
  }),
};

const addRemoveButtonProps = {
  removeButton: (callback) => ({
    buttonId: BUTTON_ID.removeButton,
    buttonType: 'remove',
    buttonClassName: 'remove-button',
    handleClick: callback,
  }),
  addButton: (callback) => ({
    buttonId: BUTTON_ID.addButton,
    buttonType: 'add',
    buttonClassName: 'add-button',
    handleClick: callback,
  }),
};

export { formsProps, addRemoveButtonProps };
