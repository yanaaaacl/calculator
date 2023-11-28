let input = document.querySelector('#calculator__box-answer');
let number = document.querySelectorAll('.calculator__buttons-number');

let clear = document.querySelector('.clear');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let division = document.querySelector('.division');
let comma = document.querySelector('.comma');
let proc = document.querySelector('.proc');
let equally = document.querySelector('.equally');




    number.forEach(function(el){
      let value = el;
      let text = Number(value.textContent);

      value.addEventListener('click', function(){
            input.value += text;
      })
      
    });
