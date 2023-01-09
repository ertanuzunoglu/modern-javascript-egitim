const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let number1 = '0';
let number2 = '0';
let operator = ''
function updateDisplay () {
   display.value = displayValue
}

keys.addEventListener('click', function (e) {
   const element = e.target;
   if (!element.matches('button')) return; // boşluğa tıkladığımızda alt satırdaki kodlar çalışmasın diye bu satırı yazdık.
   if (element.classList.contains('operator')) {
      if (element.value !== "=" && number1 === '0') {
         operator = element.value;
         number1 = displayValue;
         displayValue = '0'
         console.log(number1)
      } else if (element.value == "=") {
         number2 = displayValue;
         console.log(number2);
         calculate(number1,number2);
      } 
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
   updateDisplay();
   displayValue = displayValue === '0'? num: displayValue + num // tıkladığımız sayı 0'a eşit değilse displayin önceki değerinin yanına yazıyoruz.
}

function inputDecimal () {
   if (!displayValue.includes('.')) {
      displayValue += '.'
   }
}

function inputClear () {
   displayValue = '0'
}

function calculate (num1, num2) {
   
   if (operator == '+') {
      displayValue = Number(num1) + Number(num2);
   }
   if (operator == '-') {
      displayValue = Number(num1) - Number(num2);
   }
   if (operator == '*') {
      displayValue = Number(num1) * Number(num2);
   }
   if (operator == '/') {
      displayValue = Number(num1) / Number(num2);
   }
   console.log(displayValue)
   updateDisplay();
   displayValue = '0'
   number1 = '0'
   number2 = '0'
}