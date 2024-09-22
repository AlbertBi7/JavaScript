// Array to store the operands and operators
let calculation = [];
let currentInput = "";
let display = document.getElementById("display");
let secondaryDisplay = document.getElementById("secondaryDisplay");

// Function to update the display and store the input
function updateDisplay(input) {
  // Check if input is a number or a decimal point
  if (!isNaN(input) || input === "decimal") {
    if (input === "decimal") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
      }
    } else {
      currentInput += input;
    }
    display.innerHTML = currentInput;
  }
  
  // If input is an operator, store the current input and operator in the array
  if (['+', '-', '×', '÷'].indexOf(input) >= 0) {
    if (currentInput !== "") {
      calculation.push(currentInput);
      calculation.push(input);
      currentInput = "";
    }
    updateSecondaryDisplay();
  }

  // Handle equals button to calculate the result
  if (input === "equals") {
    if (currentInput !== "") {
      calculation.push(currentInput);
    }
    let result = calculateResult(calculation);
    display.innerHTML = result;
    secondaryDisplay.innerHTML = "";
    calculation = [];
    currentInput = result;
  }

  // Handle the negative value button
  if (input === "negative-value") {
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    display.innerHTML = currentInput;
  }
}

// Function to clear the display
function clearDisplay() {
  calculation = [];
  currentInput = "";
  display.innerHTML = "0";
  secondaryDisplay.innerHTML = "";
}

// Function to calculate the result based on the calculation array
function calculateResult(calcArray) {
  let result = parseFloat(calcArray[0]);

  for (let i = 1; i < calcArray.length; i += 2) {
    let operator = calcArray[i];
    let nextOperand = parseFloat(calcArray[i + 1]);

    switch (operator) {
      case '+':
        result += nextOperand;
        break;
      case '-':
        result -= nextOperand;
        break;
      case '×':
        result *= nextOperand;
        break;
      case '÷':
        result /= nextOperand;
        break;
    }
  }
  return result;
}

// Update secondary display to show the current calculation
function updateSecondaryDisplay() {
  secondaryDisplay.innerHTML = calculation.join(' ');
}
