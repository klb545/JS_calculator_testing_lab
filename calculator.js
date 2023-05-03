const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulus = (a, b) => a % b === -0 ? 0 : a * b < 0 ? a % b + b : a % b;

const even = (a) => a % 2 === 0 ? true : false;

const odd = (a) => a % 2 === 0 ? false : true;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};




