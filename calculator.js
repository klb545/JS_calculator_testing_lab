const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulus = (a, b) => a % b === -0 ? 0 : (a * b < 0 ? a % b + b : a % b);

const even = function(a){
    if(a % 2 === 0){
        return true;
    } else {
        return false;
    }
};

const odd = function(a){
    if(a % 2 === 0){
        return false;
    } else {
        return true;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};




