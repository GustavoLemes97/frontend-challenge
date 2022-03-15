/* eslint-disable */
import {
  URL_TO_VISIT,
  HAVE_VALUE,
  HAVE_TEXT,
  HEADER_TEXT_ID,
  HEADER_LOGO_ID,
  INPUT_ID,
  INPUT_LABEL_ID,
  INPUT_QUESTION_TEXT_ID,
  BUTTON_ID,
  CALCULATE_RESULT_TEXT_ID,
  ABBREVIATION_TEXT_ID,
  CALCULATE_NET_SALARY_TEXT_ID,
  HOW_TO_CALCULATE_TEXT_ID,
  HOW_TO_CALCULATE_TABLE_ID,
} from '../../src/constants';

describe('Verify if all elements have the correct id', () => {
  it('Verify Header´s ids', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${HEADER_TEXT_ID}]`);
    cy.get(`[id=${HEADER_LOGO_ID}]`);
  });

  it('Verify Form ids', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_LABEL_ID.salaryLabel}]`);
    cy.get(`[id=${INPUT_ID.salaryInput}]`);
    cy.get(`[id=${INPUT_QUESTION_TEXT_ID.salaryQuestion}]`);

    cy.get(`[id=${INPUT_LABEL_ID.discountLabel}]`);
    cy.get(`[id=${INPUT_ID.discountInput}]`);
    cy.get(`[id=${INPUT_QUESTION_TEXT_ID.discountQuestion}]`);

    cy.get(`[id=${INPUT_LABEL_ID.dependentsLabel}]`);
    cy.get(`[id=${INPUT_ID.dependentsInput}]`);
    cy.get(`[id=${INPUT_QUESTION_TEXT_ID.dependentsQuestion}]`);

    cy.get(`[id=${BUTTON_ID.removeButton}]`);
    cy.get(`[id=${BUTTON_ID.addButton}]`);

    cy.get(`[id=${BUTTON_ID.calculateButton}]`);
  });

  it('Verify CalculationResult`s id', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${CALCULATE_RESULT_TEXT_ID}]`);
    cy.get(`[id=${ABBREVIATION_TEXT_ID}]`);
    cy.get(`[id=${CALCULATE_NET_SALARY_TEXT_ID}]`);
  });

  it('Verify HowToCalculate`s id', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`);
    cy.get(`[id=${HOW_TO_CALCULATE_TEXT_ID}]`);
  });
});

describe('Verify if is possible to write in the inputs', () => {
  it('It`s possible to write in the salary input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('2800,00');
    cy.get(`[id=${INPUT_ID.salaryInput}]`).should(HAVE_VALUE, '2.800,00');
  });

  it('It`s possible to write in the discount input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.discountInput}]`).type('150,00');
    cy.get(`[id=${INPUT_ID.discountInput}]`).should(HAVE_VALUE, '150,00');
  });

  it('It`s possible to write in the discount input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('3');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).should(HAVE_VALUE, '03' || '3');
  });
});

describe('Verify if isn´t possible to write invalid values in the inputs', () => {
  it('It isn´t possible to write invalid values in the salary input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.salaryInput}]`).should(HAVE_VALUE, '0,00');
  });

  it('It isn´t possible to write invalid values in the discount input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.discountInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.discountInput}]`).should(HAVE_VALUE, '0,00');
  });

  it('It isn´t possible to write invalid values in the discount input', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).should(HAVE_VALUE, '0');
  });
});

describe('Verify if the calculation with valid'
  + ' input values has the correct result', () => {
  it('The correct result should be shown when the user'
  + ' not use the increment/decrement dependents´ buttons', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('2800,00');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('150,00');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('3');
    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${CALCULATE_NET_SALARY_TEXT_ID}]`).should(HAVE_TEXT, '2.398,83');
  });

  it('The correct result should be shown when the user'
  + ' use the increment/decrement dependents´ buttons', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('2800,00');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('150,00');
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.removeButton}]`).click();

    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${CALCULATE_NET_SALARY_TEXT_ID}]`).should(HAVE_TEXT, '2.398,83');
  });

  it('How to calculate table should be shown with correct values', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('2800,00');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('150,00');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('3');
    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(1).should(HAVE_TEXT, 'R$ 2.800,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(2).should(HAVE_TEXT, 'INSS (8,75%)');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(3).should(HAVE_TEXT, '- R$ 245,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(4).should(HAVE_TEXT, 'IRRF (0,24%)');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(5).should(HAVE_TEXT, '- R$ 6,17');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(7).should(HAVE_TEXT, '- R$ 150,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(9).should(HAVE_TEXT, 'R$ 2.398,83');
  });
});

describe('Verify if the calculation with invalid'
  + ' input values changes nothing', () => {
  it('Nothing should change when the user type invalid values and'
  + ' not use the increment/decrement dependents´ buttons', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('invalid');
    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${CALCULATE_NET_SALARY_TEXT_ID}]`).should(HAVE_TEXT, '0,00');
  });

  it('Nothing should change when the user type invalid values and '
  + ' use the increment/decrement dependents´ buttons', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('invalid');
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.addButton}]`).click();
    cy.get(`[id=${BUTTON_ID.removeButton}]`).click();

    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${CALCULATE_NET_SALARY_TEXT_ID}]`).should(HAVE_TEXT, '0,00');
  });

  it('How to calculate table should be shown with unchanged values', () => {
    cy.visit(URL_TO_VISIT);

    cy.get(`[id=${INPUT_ID.salaryInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.discountInput}]`).type('invalid');
    cy.get(`[id=${INPUT_ID.dependentsInput}]`).type('invalid');
    cy.get(`[id=${BUTTON_ID.calculateButton}]`).click();

    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(1).should(HAVE_TEXT, 'R$ 0,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(2).should(HAVE_TEXT, 'INSS (0,00%)');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(3).should(HAVE_TEXT, '- R$ 0,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(4).should(HAVE_TEXT, 'IRRF (0,00%)');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(5).should(HAVE_TEXT, '- R$ 0,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(7).should(HAVE_TEXT, '- R$ 0,00');
    cy.get(`[id=${HOW_TO_CALCULATE_TABLE_ID}]`)
      .get('tr').get('td').eq(9).should(HAVE_TEXT, 'R$ 0,00');
  });
});
