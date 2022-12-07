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

  document
    .getElementById("clear-button")
    .addEventListener("click", clearDisplay);
}

window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.
// The function that we write here: onLoadOperations, it's
// a function that will be called right after the page has loaded.
