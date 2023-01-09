const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';

function updateDisplay () {
   display.value = displayValue
}

keys.addEventListener('click', function (e) {
   const element = e.target;
   if (!element.matches('button')) return; // boşluğa tıkladığımızda alt satırdaki kodlar çalışmasın diye bu satırı yazdık.
   if (element.classList.contains('operator')){
      console.log('operator,', element.value);
      return;
   }
   if (element.classList.contains('decimal')) { //. için kontrol yapıyor ve noktayı display ekranına koymak için yazdığımız foksiyonu çağırıyoruz.
      console.log('display', displayValue)
      inputDecimal();
      updateDisplay();
      return;
      
   }
   
   if (element.classList.contains('clear')) {
      inputClear();
      updateDisplay();
      return;
   }


   inputNumber(element.value); // tıkladığımız sayıyı inputa yazdırabilmemiz için bu fonkiyonuz çağırıyoruz.
   updateDisplay(); // her tıkladığımız sayı için inputtaki değeri değiştirmek için bu fonsiyonu çağırıyoruz.
   
   
   
})

function inputNumber (num) {
   displayValue = displayValue === '0'? num: displayValue + num // tıkladığımız sayı 0'a eşit değilse displayin önceki değerinin yanına yazıyoruz.
}

function inputDecimal () {
   if (!displayValue.includes('.')) {
      console.log(displayValue);
      displayValue += '.'
   }
   console.log(displayValue);

}

function inputClear () {
   displayValue = '0'
}
