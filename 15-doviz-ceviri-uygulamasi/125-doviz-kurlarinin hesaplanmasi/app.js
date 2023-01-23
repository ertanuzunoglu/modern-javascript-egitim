const api_key = '9f5ce6956039ac3cbaba96c1';
const url = 'https://v6.exchangerate-api.com/v6/' + api_key;

const currenct_one = document.getElementById('currenct_one');
const currenct_two = document.getElementById('currenct_two');
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