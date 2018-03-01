// Assign variable to a function
const square = function (x) {
  return x * x;
};

// Define function with our variable
function squareFunc(x) {
  return x * x;
};

// ES6 arrow function
const squareArrowFunc = (x) => {
  return x * x;
};

// ES6 arrow shorthand function - return single expression
const squareArrowShortHandFunc = (x) => x * x;

console.log(squareArrowShortHandFunc(6));



// Challenge
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

// Shorthand
const getFirstNameSH = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameSH('Tuan Hoang'));


