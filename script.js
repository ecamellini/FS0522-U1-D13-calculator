function onNumericButtonClick() {
  console.log("CLICKED!");
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
}

window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.
// The function that we write here: onLoadOperations, it's
// a function that will be called right after the page has loaded.
