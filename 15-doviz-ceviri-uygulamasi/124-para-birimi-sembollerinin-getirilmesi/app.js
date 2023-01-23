const api_key = '9f5ce6956039ac3cbaba96c1';
const url = 'https://v6.exchangerate-api.com/v6/' + api_key;

const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');
const list_one = document.getElementById('list_one');
const list_two = document.getElementById('list_two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

fetch(url + '/codes')
   .then(res => res.json())
   .then(data => {
      const items = data.supported_codes;
      let options;
      for (let item of items) {
         options += `<option value='${item[0]}'>${item[1]}</option>`
      }
      list_one.innerHTML = options;
      list_two.innerHTML = options;
   })



calculate.addEventListener('click', async () => {
   const selectedOne = currency_one.value;
   const selectedTwo = currency_two.value;
   const miktar = amount.value;

   const response = await fetch(url + '/latest/' + selectedOne);
   const data = await response.json();
   const sonuc = (data.conversion_rates[selectedTwo] * miktar).toFixed(2);
   result.innerHTML = `
            <div class="card border-primary">
               <div class="card-body text-center" style="font-size:30px">${miktar} ${selectedOne}=${sonuc} ${selectedTwo}</div>
            </div>   
      `;
})

