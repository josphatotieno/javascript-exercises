const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+b,0)
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(num => {
    result *= num
  });

  return result;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	let num = a;
  let product = 1;

  while(num > 0) {
    product *= num
    num--
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
