// pure function

const add = (a, b) => a + b;

// impure function

let total = 0;

const addToTotal = (amount) => (total = total + amount);

const updateDate = () => {
  new Date();
};

const randomNum = () => {
  return Math.random();
};

// currying / function curry
const sum = (a) => (b) => a + b;

console.log(sum(3)(5));
