const word_el = document.querySelector('#word');
const popup = document.querySelector('#popup-container');
const message_el = document.querySelector('#success-message');
const wrongLetters_el = document.querySelector('#wrong-letters');
const items = document.querySelectorAll('.item');

const correctLetters = [];
const wrongLetters = [];

const selectedWord = getRandomWord();

function getRandomWord () {
   const words = ['javascript', 'java', 'python'];
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
      ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''};
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
}



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
            console.log('bu harfi zaten eklediniz')
         }
      } else {
         if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            updateWrongLetters();
         }
      }
   }
})

displayWord();