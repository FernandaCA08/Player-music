const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');

//seção de variáveis auxiliares para o meu código
const morena = {
  songName: 'Morena',
  file: 'morena',
  artist: 'JJSV',
};
const criadoemgalpao = {
  songName: 'Criado em Galpão',
  file: 'criado em galpao',
  artist: 'Os Serranos',
};
const fundodagrota = {
  songName: 'Fundo da grota',
  file: 'fundo da grota',
  artist: 'Baitaca',
};
let isPlaying = false;
let isShuffled = false; 
const orginalPlaylist = [morena, criadoemgalpao, fundodagrota];
let sortedPlaylist = [...orginalPlaylist];
let index = 0;

function playSong() {
  isPlaying = true;
  play.querySelector("i.bi").classList.remove("bi-play-circle-fill");
  play.querySelector("i.bi").classList.add("bi-pause-circle-fill");
  song.play();
}

function pauseSong() {
  isPlaying = false;
  play.querySelector("i.bi").classList.add("bi-play-circle-fill");
  play.querySelector("i.bi").classList.remove("bi-pause-circle-fill");
  song.pause();
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
    song.src = `./songs/${sortedPlaylist[index].file}.mp3`;
    cover.src = `./images/${sortedPlaylist[index].file}.jpg`;
}

function nextSong() {
    if(currentSong === playlist.length -1){
        currentSong = 0;
    }
    else {
        currentSong += 1;
    }
    initializeSong();
    playSong();
}

function previousSong() {
    if(currentSong === 0){
        currentSong = playlist.length - 1;
    }
    else {
        currentSong -= 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar() {
  const barWidth = (song.currentTime/song.duration)*100;
  currentProgress.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event){
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition/width)* song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray){
  let size = preShuffleArray.length;
  let currentIndex = size - 1;
  while (currentIndex > 0) {
    let randomIndex = Math.floor(Math.rondom()* size);
    let aux = preShuffleArray[currentIndex];
  }

}

function shuffleButtonClicked(){
  if(isShuffled === false){
    isShuffled = true;
    shuffleArray
  }
}

initializeSong();

play.addEventListener('click', playPauseDecider);
next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
