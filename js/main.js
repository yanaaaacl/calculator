
let input = document.querySelector('#calculator__box-answer');

let firstNumber = null;
let operator = null;
let secondNumber = null;

input.textContent = "0";

let number = document.querySelectorAll('.calculator__buttons-number');
number.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "=") {
      operator = null;
      firstNumber = null;
      secondNumber = null;
    }

    if (operator === null) {
     
      if (firstNumber === null) {
        firstNumber = button.textContent;
      } else {
        if (firstNumber.includes(".") && button.textContent === ".") {
          return;
        }
        if (firstNumber.length > 10) {
          return;
        }
        firstNumber += button.textContent;
      }
   
      input.textContent = firstNumber;
    } else {
     
      if (secondNumber === null) {
        secondNumber = button.textContent;
      } else {
        if (secondNumber.includes(".") && button.textContent === ".") {
          return;
        }
        if (secondNumber.length > 10) {
          return;
        }
        secondNumber += button.textContent;
      }
     
      input.textContent = secondNumber;
    }
  });
});


let clear = document.querySelector('.clear');
clear.addEventListener("click", () => {
  operator = null;
  firstNumber = null;
  secondNumber = null;
  input.textContent = "0";
});


let sym = document.querySelectorAll('.symbols');
sym.forEach((button) => {
  button.addEventListener("click", () => {
    if ((firstNumber === null && secondNumber === null) || operator === "=") {
      return;
    }

    if (firstNumber !== null && secondNumber === null) {
      
      operator = button.textContent;
      input.textContent = firstNumber;
    } 
  });
});

let equally = document.querySelector('.equally');
equally.addEventListener("click", () => {
  if ((firstNumber === null && secondNumber === null) || operator === "=") {
    return;
  }

  if (firstNumber !== null && secondNumber !== null) {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        if (secondNumber === "0") {
          input.textContent = "ERROR";
          break;
        }
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    input.textContent = result;
    firstNumber = result.toString();
    secondNumber = null;
    operator = null;
  }
});




