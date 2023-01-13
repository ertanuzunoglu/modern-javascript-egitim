const container = document.querySelector('.container');
const image = document.querySelector('#music-image');
const title = document.querySelector('#music-details .title');
const singer = document.querySelector('#music-details .singer');
const play = document.querySelector('#controls #play');
const prev = document.querySelector('#controls #prev');
const next = document.querySelector('#controls #next');
const duration = document.querySelector('#duration');
const currentTime = document.querySelector('#current-time');
const progressBar = document.querySelector('#progress-bar');
const volumeIcon = document.querySelector('#volume-icon');
const volumeBar = document.querySelector('#volume-bar');



const player = new MusicPlayer(musicList);

let music = player.getMusic();


window.addEventListener('load', () => {
   let music = player.getMusic();
   displayMusic(music);
})

function displayMusic (music) {
   title.innerText = music.getName();
   singer.innerText = music.singer;
   image.src = 'img/' + music.img;
   audio.src = 'mp3/' + music.file;
   console.log(audio)
}

play.addEventListener('click', () => {
   const isMusicPlay = container.classList.contains('playing')
   isMusicPlay ? pauseMusic() : playMusic();
})

prev.addEventListener('click', () => { prevMusic() })
next.addEventListener('click', () => { nextMusic() })

const prevMusic = () => {
   player.previous();
   let music = player.getMusic();
   displayMusic(music);
   playMusic();
}

const nextMusic = () => {
   player.next();
   let music = player.getMusic();
   displayMusic(music);
   playMusic();
}

const pauseMusic = () => {
   container.classList.remove('playing');
   play.querySelector('i').classList = 'fa-solid fa-play';
   audio.pause();
}

const playMusic = () => {
   container.classList.add('playing');
   play.querySelector('i').classList = 'fa-solid fa-pause';
   audio.play();
}

const calculateTime = (toplamSaniye) => {
   const dakika = Math.floor(toplamSaniye / 60);
   const saniye = Math.floor(toplamSaniye % 60);
   const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
   const sonuc = `${dakika}:${guncellenenSaniye}`;
   return sonuc;
}

audio.addEventListener('loadedmetadata', () => {
   duration.textContent = calculateTime(audio.duration);
   progressBar.max = Math.floor(audio.duration);  
})

audio.addEventListener('timeupdate', () => {
   progressBar.value = Math.floor(audio.currentTime);
   currentTime.textContent = calculateTime(progressBar.value);
})

progressBar.addEventListener('input', () => {
   currentTime.textContent = calculateTime(progressBar.value);
   audio.currentTime = progressBar.value;
})


let sesDurumu = 'sesli';
let volumeBarValue;

volumeIcon.addEventListener('click', () => {
   if (sesDurumu === 'sesli') {
      audio.muted = true
      sesDurumu = 'sessiz'
      volumeIcon.classList = 'fa-solid fa-volume-xmark';
      volumeBar.value = 0;
   } else {
      audio.muted = false;
      sesDurumu = 'sesli'
      volumeIcon.classList = 'fa-solid fa-volume-high'
      volumeBar.value = volumeBarValue
   }
});

volumeBar.addEventListener('input', (e) => {
   
   console.log('volume',volumeBarValue)
   volumeBarValue=volumeBar.value
   audio.volume = e.target.value / 100
   if (volumeBar.value == 0) {
      volumeIcon.classList = 'fa-solid fa-volume-xmark';
      audio.muted = true;
      sesDurumu = 'sesli';
   } else {
      audio.muted = false;
      sesDurumu = 'sesli'
      volumeIcon.classList = 'fa-solid fa-volume-high'
   }
})