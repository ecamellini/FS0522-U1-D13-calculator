// We don't write any code outside functions.
// BUT -- for storage of data, that needs to be shared
// between functions...this is ok

// DATA STORAGE
// (not persistent - if reload the browser, I start from scratch)
let previousValue;
let previousOperation;
// These are called GLOBAL variables, because they are available to all our JS code

// AN ALTERNATIVE...
// let calculatorStorage = {
//   previousValue: null,
//   previousOperation: null
// }

// _________________________________________

function onNumericButtonClick(eventData) {
  // click listener for numeric buttons

  // .target on the event object/event data alwasy gives you
  // a refernce to the tag where the event was triggered.
  let clickedDigit = eventData.target.innerText;
  let display = document.getElementById("display");

  if (display.innerText === "0") {
    // replace the 0 with digit clicked.
    display.innerText = clickedDigit;
  } else {
    // add the digit to the display
    display.innerText += clickedDigit;
  }
  // The same:
  // display.innerText = display.innerText + clickedDigit;
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function onOperationButtonClick(eventData) {
  let operation = eventData.target.innerText;

  if (operation !== "=") {
    // We want to
    // 1) Save the number on the display, and clear it
    // 2) Save the operation
    previousValue = document.getElementById("display").innerText;
    previousOperation = operation;
    clearDisplay();

    console.log("Memory: ", previousValue, previousOperation);
  } else {
    // When we click on equals, we want to
    // 1) Get the previous number that we saved
    // 2) Get the number currently on the diplay
    // 3) Get the operation saved before
    // 4) Execute the operation --> print the result on display

    // NOTE THAT WE HAVE PREVIOUS VALUE AND PREVIOUS OPERATION AVAIABLE, STORED IN
    // THE GLOBAL VARS:
    // previousValue
    // previousOperation
    let currentValue = document.getElementById("display").innerText;
    console.log("Executing: ", previousValue, previousOperation, currentValue);

    // To evaluate the result of a JS operation written as a string
    // we could use eval()
    // eval("12 + 14")  ---> 26
    // BUT -- EVAL SHOULD NEVER BE USED: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

    let result;

    // We need to convert the two things we saved to number.
    // Why? Because they were both .innerText --> strings.
    let operand1 = parseFloat(previousValue);
    let operand2 = parseFloat(currentValue);

    // Let's try with a serie of if
    // if (previousOperation === "+") {
    //   result = operand1 + operand2;
    // } else if (previousOperation === "-") {
    //   result = operand1 - operand2;
    // } else if (previousOperation === "/") {
    //   result = operand1 / operand2;
    // } else if (previousOperation === "*") {
    //   result = operand1 * operand2;
    // } else {
    //   alert("Something went wrong!");
    // }

    // ANOTHER WAY TO DO THE SAME IF ... ELSE CHAIN
    // Syntactic sugar for a chain of comparisons on the same variable.
    switch (previousOperation) {
      case "+":
        result = operand1 + operand2;
        break; // Needed to avoid JS executing also the next cases.

      case "-":
        result = operand1 - operand2;
        break;

      case "*":
        result = operand1 * operand2;
        break;

      case "/":
        result = operand1 / operand2;
        break;

      default: // This is like the final else in the chain of if ... else
        alert("Something went wrong!");
        break;
    }

    document.getElementById("display").innerText = result;
  }
}

function onLoadOperations() {
  // We want to programmatically add "click" event
  // listeners to all the buttons of our calculator.

  let numericButtons = document.querySelectorAll(".numeric-button");

  // for (let i = 0; i < numericButtons.length; i++) {
  //   let button = numericButtons[i];
  //   console.log(button);
  // }

  // ANOTHER WAY TO DO THIS, TO ITERATE THROUGH THE ELEMENTS OF A LIST
  for (let button of numericButtons) {
    // For ... of statement
    button.addEventListener("click", onNumericButtonClick); // NO (), it will be called later
  } // For OF, not FOR IN. FOR IN is something different
  // it is deprecated, it's buggy feature of JS that it's still there.

  let operationButtons = document.querySelectorAll(".operation-button");
  for (let button of operationButtons) {
    button.addEventListener("click", onOperationButtonClick);
  }

  document
    .getElementById("clear-button")
    .addEventListener("click", clearDisplay);
}

window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.
// The function that we write here: onLoadOperations, it's
// a function that will be called right after the page has loaded.
