const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;;

const divide = (a, b) => a / b;

const modulus = (a, b) => {
    if (a % b === -0) {
        return 0;
    }
    if(a < 0 && b < 0){
        return a % b;
    }
    if(a < 0){
        return b + (a % b);
    }
    if(b < 0){
        return b + (a % b);
    }
    return a % b;
};

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



