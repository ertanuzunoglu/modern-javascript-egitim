const word_el = document.querySelector('#word');
const popup = document.querySelector('#popup-container')
const message_el = document.querySelector('#success-message')

const correctLetters = ['j', 'a','v']
const wrongLetters = [];

function getRandomWord () {
   const words = ['javascript', 'java', 'python'];
   return words[Math.floor(Math.random()*words.length)]
}




function displayWord () {
   const selectedWord = getRandomWord();
   
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

displayWord();