// Function for addition
const add = (a, b) => {
    return a + b;
};

// Function for subtraction
const subtract = (a, b) => {
    return a - b;
};

// Function for multiplication
const multiply = (a, b) => {
    return a * b;
};

// Function for division
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    else {
        return a / b;
    }
};

// Function to perform calculation
const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

// Numbers
let num1 = 20;
let num2 = 10;

// Display results
console.log("Addition:", num1, "+", num2, "=", calculate(num1, num2, add));
console.log("Subtraction:", num1, "-", num2, "=", calculate(num1, num2, subtract));
console.log("Multiplication:", num1, "*", num2, "=", calculate(num1, num2, multiply));
console.log("Division:", num1, "/", num2, "=", calculate(num1, num2, divide));