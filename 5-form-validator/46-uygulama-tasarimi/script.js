const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(username.value)
});