const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error (input ,message) {
   input.classList.add('is-invalid');
   const div = input.nextElementSibling;
   div.innerText = message;
   div.className = 'invalid-feedback';
}

function success ( input ) {
   input.classList.remove('is-invalid')
   input.classList.add('is-valid');
}

function checkEmail(input) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if (re.test(input.value)) {
      success(input);
   } else {
      error(input, 'hatalı bir mail adresi girdiniz.');
   }
}
// googlea how to validate email in javascript yazdık çıkan fonksiyonu buraya getirdik.

function checkRequired (inputs) {
   inputs.forEach(function(input){
      if (input.value === '') {
         error(input, `${input.id} is required`);
      } else {
         success(input);
      }  
   });
   
   
}

form.addEventListener('submit', function(e) {
   e.preventDefault();
   
   checkRequired([username, email, password, repassword]);
   checkEmail(email)
});