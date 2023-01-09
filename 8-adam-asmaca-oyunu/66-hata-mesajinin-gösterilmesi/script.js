const word_el = document.querySelector('#word');
const popup = document.querySelector('#popup-container');
const message_el = document.querySelector('#success-message');
const wrongLetters_el = document.querySelector('#wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.querySelector('#message');
const playAgainBtn = document.querySelector('#play-again')

const correctLetters = [];
const wrongLetters = [];

let selectedWord = getRandomWord();

function getRandomWord () {
   const words = ['javascript', 'java', 'python','ertan','aykut','samet','hasan','ali','rifat','yasar'];
   return words[Math.floor(Math.random()*words.length)]
}

function displayWord () {
   word_el.innerHTML = `
   ${selectedWord.split('').map(letter => `
      <div class='letter'>
         ${correctLetters.includes(letter) ? letter : ''}
      </div>
      `).join('')}
   `;
   const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
       popup.style.display = 'flex'
       message_el.innerText ='Tebrikler Kazandınız'
    }
}

function updateWrongLetters () {
   wrongLetters_el.innerHTML = `
      ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''}
      ${wrongLetters.map(letter => `<span>${letter}</span>`)}
   `;
   items.forEach((item, index) => {
      const errorCount = wrongLetters.length;
      if (index < errorCount) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
      
   })
   
   if (wrongLetters.length === items.length) {
      popup.style.display = 'flex'
      message_el.innerText ='Malesef Kaybettiniz.'
   }
}

function displayMassage () {
   message.classList.add('show');
   setTimeout(function () {
      message.classList.remove('show');
   },2000)

}

playAgainBtn.addEventListener('click', function () {
   correctLetters.splice(0);
   wrongLetters.splice(0);
   selectedWord = getRandomWord();
   displayWord();
   updateWrongLetters();
   popup.style.display ='none'
})



window.addEventListener('keydown', function (e) {
   console.log(e)
   console.log(correctLetters);
   console.log(wrongLetters);
   if (e.keyCode >= 65 && e.keyCode <= 90) {
      console.log(e.keyCode)
      const letter = e.key;
      if (selectedWord.includes(letter)) {
         if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
         } else {
            displayMassage();
         }
      } else {
         if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            updateWrongLetters();
         } else {
            displayMassage();
         }
      }
   }
})

displayWord();