// Variable initialization
const allButtons = document.querySelector(".buttonPad");
const userInput = document.querySelector("#user-input");
const calculator = document.querySelector(".calculator");
const displayResult = document.querySelector("#resuult")
let mathEquation = 0;


// Create response to clicking
allButtons.addEventListener("click", (event) => {

    // Terminate if user clicks non-button
    if(!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent
    let equationDisplay = userInput.textContent;

})



// Create function to calculate from operator result
function operate (firstInput, operator, secondInput) {
    firstInput = Number(firstInput);
    secondInput = Number(secondInput);

    if (operator === '+') return firstInput + secondInput;
    if (operator === '-') return firstInput - secondInput;
    if (operator === 'X') return firstInput * secondInput;
    if (operator === '/') return firstInput / secondInput;
}




















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