// querySelector: es para seleccionar el pimer elemento del selector css
const calculatorDisplay = document.querySelector(".display");

// querySelectorAll: es para seleccionar todos los elementos del selector css
const calculatorNumberButtons = document.querySelectorAll(".number");
const calculatorClearButton = document.querySelector(".ac_button");
const calculatorPlusMinusButton = document.querySelector(".plus_minus_button");
const calculatorCommaButton = document.querySelector(".comma_button");
const calculatorPlusButton = document.querySelector(".plus_button");
let result = 0
let operation =  ''

for (let i = 0; i < calculatorNumberButtons.length; i++) {
  calculatorNumberButtons[i].addEventListener("click", (e) => {
    if (calculatorDisplay.textContent.trim() === "0") {
      calculatorDisplay.textContent = e.target.textContent;
    } else { 
        calculatorDisplay.textContent += e.target.textContent;
    }
    // calculatorDisplay.textContent = Number(calculatorDisplay.textContent.trim() + e.target.textContent)
  });
}

calculatorClearButton.addEventListener("click", () => {
  calculatorDisplay.textContent = 0;
  result = 0
  operation = ''
});

calculatorPlusMinusButton.addEventListener("click", () => {
  if (calculatorDisplay.textContent.trim() !== "0" && calculatorDisplay.textContent.trim() !== "0,") {
    const displayHasMinus = calculatorDisplay.textContent[0] === "-";
    if (displayHasMinus) {
      calculatorDisplay.textContent = calculatorDisplay.textContent.replace("-", "");
    } else {
      calculatorDisplay.textContent = "-" + calculatorDisplay.textContent;
    }
  }
});

calculatorCommaButton.addEventListener('click', () => {
  const displayHasComma = calculatorDisplay.textContent.includes(',')
  if (!displayHasComma){
    calculatorDisplay.textContent = calculatorDisplay.textContent + ','
  }
});

calculatorPlusButton.addEventListener('click', (e) => {
    result = result + Number(calculatorDisplay.textContent.trim())
    if(operation === '+'){
      calculatorDisplay.textContent = result 
      operation = ''
    } else{
      operation = '+'
    }
  console.log(result);
  console.log(operation);
})



