const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function (arr) {
    return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (a) {
    let fact = a;

    if (a === 0 || a === 1) {
        return 1;
    } else {
        while (a > 1) {
            fact *= a - 1;
            a--;
        }
        return fact;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
