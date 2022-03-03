// Variable initialization

// Input variables when user clicks buttons (0 - 9)
let firstInput = 1;
let secondInput = 2;

// Math operator functions

// Addition
function add(firstInput, secondInput) {
    console.log(firstInput + secondInput);
}

// Subtraction
function subtract(firstInput, secondInput) {
    return(firstInput - secondInput);
}

// Multiplication
function multiply(firstInput, secondInput) {
    return(firstInput * secondInput);
}

// Division
function divide(firstInput, secondInput) {
    return(firstInput / secondInput);
}



// Operate function [Takes in 2 numbers to use in a math operator function]
function operate(firstInput, secondInput) {
    add(firstInput, secondInput);
}

operate(firstInput, secondInput);