// Variable initialization
const allButtons = document.querySelector(".buttonPad");
const userInput = document.querySelector("#user-input");
const calculator = document.querySelector(".calculator");
const displayResult = document.querySelector("#result");
let isEqualsPressed = false; // Set equal to not being pressed by default
let mathEquation = 0; // Variable responsible for back-end equation calculation
let checkDecimal = ''; // Empty string to store all numbers + check for decimal


// Create response to clicking
allButtons.addEventListener("click", (event) => {

    // Terminate if user clicks non-button
    if(!event.target.closest('button')) return;

    // Variable initialization
    const key = event.target;
    const keyValue = key.textContent;
    let equationDisplay = userInput.textContent;
    const { type } = key.dataset;
	const { previousKeyType } = calculator.dataset;


    // When number buttons are pressed
    if(type === 'number' && !isEqualsPressed) {
        // If display is 0
        if (equationDisplay === '0') {
            // If an operator has been used last, add key value after. Otherwise, just key value
            userInput.textContent = (previousKeyType === 'operator') ? equationDisplay + keyValue : keyValue;
            // Set the equation when operator last used to equation + number, otherwise just number.
            mathEquation = (previousKeyType === 'operator') ? mathEquation + key.value : key.value;
            checkDecimal = checkDecimal + keyValue;
        } else {
            // Check length, replace with exponential if too long
            if (checkDecimal.length >= 19) {
                const replaceNumber = checkDecimal;
                checkDecimal = Number(checkDecimal).toExponential(2);
                userInput.textContent = equationDisplay.replace(replaceNumber, checkDecimal);
            } else {
                // Check for infinity / NaN
                userInput.textContent = userInput.textContent.includes('N') ? 'NaN' : userInput.textContent.includes('I') ? 'Infinity' : equationDisplay + keyValue;
                mathEquation = mathEquation + key.value;
                checkDecimal = checkDecimal + keyValue;
            }
        }
    }
    // Check for operator before equal pressed
    if (type === 'operator' && previousKeyType !== 'operator' && !isEqualsPressed && !equationDisplay.includes('Infinity')) {
        // Reset check decimal for the next number to come after
        checkDecimal = '';
        // Add operator to display
        userInput.textContent = equationDisplay + ' ' + keyValue + ' ';
        // Add operator's value to equation
        mathEquation = mathEquation + ' ' + key.value + ' ';
    }



    // Check if decimal pressed + not equals yet
    if (type === 'decimal' && (previousKeyType === 'number' || equationDisplay === '0') && !isEqualsPressed && !equationDisplay.includes('Infinity')) {
        if (!checkDecimal.includes('.')) {
            // Only add decimal if one is not already included to display, to equation, and to checkDecimal string
            userInput.textContent = equationDisplay + keyValue;
            mathEquation = mathEquation + key.value;
            checkDecimal = checkDecimal + keyValue;
        }
    }


    // Backspace and reset commands
    if ((type === 'backspace' || type === 'reset') && equationDisplay !== '0') {
        // For backspace, just remove the most recent addition on each press for display, equation, and checkDecimal stirng
        if (type === 'backspace' && !isEqualsPressed) {
            userInput.textContent = equationDisplay.substring(0, equationDisplay.length - 1);
            mathEquation = mathEquation.substring(0, mathEquation.length - 1);
            checkDecimal = checkDecimal.substring(0, checkDecimal.length - 1);
        } else {
            // For full clear - clear everything fully
            equationDisplay = '0';
            userInput.textContent = equationDisplay;
            displayResult.innerHTML = '&nbsp;';
            isEqualsPressed = false;
            mathEquation = '';
            checkDecimal = '';
        }
    }


    // Send operate function for calculation with equals pressed
    if (type === 'equal') {
        // Set equal pressed to true
        isEqualsPressed = true;
        // Set final result to function that calls operate below
        const finalResult = handleEquation(mathEquation);

        // Display the result
        if (finalResult || finalResult === 0) {
            displayResult.textContent = (!Number.isInteger(finalResult)) ? finalResult.toFixed(2) : (finalResult.toString().length >= 16) ? finalResult.toExponential(2) : finalResult;
        } else { // Throw an error
            displayResult.textContent = 'Math Error';
            console.log(finalResult);
        }
    }
    calculator.dataset.previousKeyType = type;
})



// Create function to calculate from operator result
function operate (firstInput, operator, secondInput) {
        // Input values converted to numbers to perform calculations
        firstInput = Number(firstInput);
        secondInput = Number(secondInput);

    // All four calculation scenarios
    if (operator === '+' || operator === 'plus') return firstInput + secondInput;
    if (operator === '-' || operator === 'subtract') return firstInput - secondInput;
    if (operator === 'X' || operator === 'multiply') return firstInput * secondInput;
    if (operator === '/' || operator === 'divide') return firstInput / secondInput;
}

// Function to call operate
function handleEquation(mathEquation) {
    // Variable initialization
    mathEquation = mathEquation.split(" "); // Math equation split by spaces
    const operators = ['/', 'X', '+', '-']; // Array of 4 operators
    let firstInput;
    let secondInput;
    let operator;
    let operatorIndex;
    let result;

    // Calculations performed using BEDMAS
    for (let i = 0; i < operators.length; i++) {
        while(mathEquation.includes(operators[i])) {
            // Set the operator's index equal to the index of operators at i
            operatorIndex = mathEquation.findIndex(item => item === operators[i]);
            firstInput = mathEquation[operatorIndex-1];
            operator = mathEquation[operatorIndex];
            secondInput = mathEquation[operatorIndex+1];
            // Set result equal to operate function using the three inputs
            result = operate(firstInput, operator, secondInput);
            mathEquation.splice(operatorIndex - 1, 3, result);
        }
    }
    return result;
}