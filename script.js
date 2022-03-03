// Variable initialization

// Input variables when user clicks buttons (0 - 9)
let firstInput = 0;
let secondInput = 0;

// Variable to store operation type
let operation = 0;

// Variables representing paragraph documentQuery
let inputParameters = document.querySelector("#inputParameters");
let outputNumber = document.querySelector("#outputNumber");




// Create functions to insert button clicks as numbers for firstInput
buttonZero = document.querySelector("#button0");
buttonOne = document.querySelector("#button1");
buttonTwo = document.querySelector("#button2");
buttonThree = document.querySelector("#button3");
buttonFour = document.querySelector("#button4");
buttonFive = document.querySelector("#button5");
buttonSix = document.querySelector("#button6");
buttonSeven = document.querySelector("#button7");
buttonEight = document.querySelector("#button8");
buttonNine = document.querySelector("#button9");


buttonZero.addEventListener("click", function (firstInput) {
    firstInput = 0;
    firstValueInput(firstInput);
});

buttonOne.addEventListener("click", function (firstInput) {
    firstInput = 1;
    firstValueInput(firstInput);
});

buttonTwo.addEventListener("click", function (firstInput) {
    firstInput = 2;
    firstValueInput(firstInput);
});

buttonThree.addEventListener("click", function (firstInput) {
    firstInput = 3;
    firstValueInput(firstInput);
});

buttonFour.addEventListener("click", function (firstInput) {
    firstInput = 4;
    firstValueInput(firstInput);
});

buttonFive.addEventListener("click", function (firstInput) {
    firstInput = 5;
    firstValueInput(firstInput);
});

buttonSix.addEventListener("click", function (firstInput) {
    firstInput = 6;
    firstValueInput(firstInput);
});

buttonSeven.addEventListener("click", function (firstInput) {
    firstInput = 7;
    firstValueInput(firstInput);
});

buttonEight.addEventListener("click", function (firstInput) {
    firstInput = 8;
    firstValueInput(firstInput);
});

buttonNine.addEventListener("click", function (firstInput) {
    firstInput = 9;
    firstValueInput(firstInput);
});

// Math operator functions

// Addition
function add(firstInput, secondInput) {
    return(firstInput + secondInput);
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
    if (secondInput !== 0) {
        return(firstInput / secondInput);
    } else {
        return "Can't divide by 0!";
    }
}


// Create functions to store math operator when clicked
addButton = document.querySelector("#addButton");
subtractButton = document.querySelector("#subtractButton");
multiplyButton = document.querySelector("#multiplyButton");
divideButton = document.querySelector("#divideButton");


addButton.addEventListener("click", function () {
    operation = add();
    operationInput(firstInput);
});

subtractButton.addEventListener("click", function () {
    operation = subtract();
    operationInput(firstInput);
});

multiplyButton.addEventListener("click", function () {
    operation = multiply();
    operationInput(firstInput);
});

divideButton.addEventListener("click", function () {
    operation = divide();
    operationInput(firstInput);
});



// Operate function [Takes in 2 numbers to use in a math operator function]
function operate(firstInput, secondInput) {
    operation;
    // Probably need if / else if's to call math operator used by user
}

operate(firstInput, secondInput);






// Creation of functions that populate display with Result and Operations done from user input
// Want to store firstInput in result until operation pressed
let firstValueInput = function (firstInput) {
    outputNumber.innerHTML = `${firstInput}`
}
// Then, store firstInput and operation in top paragraph showing operations
let operationInput = function (firstInput) {
    // Add if statements to call right math operator
    // Addition for example
    inputParameters.innerHTML = `${firstInput}`
}
// Then, store secondInput in result until equals pressed
let secondValueInput = function (secondInput) {
    outputNumber.innerHTML = `${secondInput}`
}
// When equals pressed, show full operation in top including equals and result in the result section
let finalOperationInput = function (firstInput, secondInput) {
    inputParameters.innerHTML = `${firstInput} + ${secondInput} =`
    outputNumber.innerHTML = add(firstInput, secondInput);
}
finalOperationInput(firstInput, secondInput);