const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let waitingForSecondValue = false;
let operator = null;


function updateDisplay () {
   display.value = displayValue
}

keys.addEventListener('click', function (e) {
   const element = e.target;

   if (!element.matches('button')) return; // boşluğa tıkladığımızda alt satırdaki kodlar çalışmasın diye bu satırı yazdık.

   if (element.classList.contains('operator')) {
      handleOperator(element.value);
      updateDisplay();
      return;
   }

   if (element.classList.contains('decimal')) { //. için kontrol yapıyor ve noktayı display ekranına koymak için yazdığımız foksiyonu çağırıyoruz.
      inputDecimal();
      updateDisplay();
      return;  
   }
   
   if (element.classList.contains('clear')) {
      inputClear();
      updateDisplay();
      return;
   }

   inputNumber(element.value); // tıkladığımız sayıyı inputa yazdırabilmemiz için bu fonksiyonuz çağırıyoruz.
   updateDisplay(); // her tıkladığımız sayı için inputtaki değeri değiştirmek için bu fonsiyonu çağırıyoruz.
})

function inputNumber (num) {
   if (waitingForSecondValue) {
      displayValue = num;
      waitingForSecondValue = false;
   } else {
      displayValue = displayValue === '0' ? num : displayValue + num;
   }
   console.log(displayValue, firstValue,operator,waitingForSecondValue)
    // tıkladığımız sayı 0'a eşit değilse displayin önceki değerinin yanına yazıyoruz.
}

function inputDecimal () {
   if (!displayValue.includes('.')) {
      displayValue += '.'
   }
}

function inputClear () {
   displayValue = '0';
   displayValue = '0';
   firstValue = null;
   waitingForSecondValue = false;
   operator = null;
}

function handleOperator (nextOperator) {
   const value = parseFloat(displayValue);

   if (firstValue === null) {
      firstValue = value;
   } else if (operator) {
      const result = calculate(firstValue, value, operator);
      displayValue = String(result);
      firstValue = result;

   }
   waitingForSecondValue = true;
   operator = nextOperator;

   console.log(displayValue, firstValue,operator,waitingForSecondValue)
}

function calculate (first, second, operator) {
   if (operator === '+') {
      return first + second
   } else if (operator === '-') {
      return first - second
   } else if (operator === '*') {
      return first * second
   } else if (operator ==='/') {
      return first / second
   }
   return second
}
