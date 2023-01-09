const word_el = document.querySelector('#word');

const correctLetters = ['j', 'a']
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
        console.log('bildiniz.')
    }
}

displayWord();