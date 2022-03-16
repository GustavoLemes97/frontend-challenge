const INITIAL_STATE = {
  salary: 0,
  dependents: 0,
  discount: 0,
  netSalaryData: {
    discount: 0,
    netSalary: 0,
    inss: {
      deduction: 0,
      percentual: 0,
    },
    irrf: {
      deduction: 0,
      percentual: 0,
    },
  },
};

const INITIAL_TEST_STATE = {
  calculator: {
    salary: 0,
    dependents: 0,
    discount: 0,
    netSalaryData: {
      discount: 0,
      netSalary: 0,
      inss: {
        deduction: 0,
        percentual: 0,
      },
      irrf: {
        deduction: 0,
        percentual: 0,
      },
    },
  },
};

const EXPECTED_TEST_STATE = {
  calculator: {
    dependents: 3,
    discount: 150,
    netSalaryData: {
      discount: 150,
      inss: {
        deduction: 245,
        percentual: 8.75,
      },
      irrf: {
        deduction: 6.167249999999996,
        percentual: 0.24137964774951062,
      },
      netSalary: 2398.83275,
    },
    salary: 2800,
  },
};

module.exports = {
  INITIAL_STATE,
  INITIAL_TEST_STATE,
  EXPECTED_TEST_STATE,
};
