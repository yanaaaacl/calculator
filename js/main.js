
let input = document.querySelector('#calculator__box-answer');

let firstNumber = null;
let operator = null;
let secondNumber = null;

input.textContent = "0";

let number = document.querySelectorAll('.calculator__buttons-number');
number.forEach((button) => {
  button.addEventListener('click', function () {
    if (operator === '=') {
      firstNumber = null;
      operator = null;
      secondNumber = null;
    }
    if (operator === null) {
      if (firstNumber === null) {
        firstNumber = button.textContent;
      } else {
        if (firstNumber != null) {
          firstNumber += button.textContent;
        }
      }
      input.textContent = firstNumber;
    } else {
      if (secondNumber === null) {
        secondNumber = button.textContent;
      } else {
        if (secondNumber !== null) {
          secondNumber += button.textContent;
        }
      }
      input.textContent = secondNumber;
    }
  })
})



let clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  input.textContent = "0";
})



let sym = document.querySelectorAll('.symbols');
sym.forEach((button) => {
  button.addEventListener('click', function(){
    if (firstNumber !== null && secondNumber === null){
      operator = button.textContent;
    }
  })
})


let equally = document.querySelector('.equally');
equally.addEventListener('click', function(){
  if (firstNumber !== null && secondNumber !== null){
    let result;
    switch (operator){
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        if (secondNumber === '0'){
          input.textContent = 'Error';
          break;
        }
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    
    firstNumber = result.toString();
    input.textContent = firstNumber;
    secondNumber = null;
  }
})

let comma = document.querySelector('.comma');
comma.addEventListener('click', function(){
  if (operator === null){
    if (firstNumber != null){
      firstNumber += comma.textContent;
    }
    input.textContent = firstNumber;
  }else{
    if(secondNumber != null){
      secondNumber += comma.textContent;
    }
    input.textContent = secondNumber;
  }
})



