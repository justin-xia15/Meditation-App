const playButtons = document.querySelectorAll('.play');
const botPlay = document.querySelector('.play2');
const name = document.querySelector('.song-name');
const forward = document.querySelector('.next');
const backward = document.querySelector('.prev');
let currentSong = null;
let currentButton;
let playing = false;
let currentlyPlaying;

const music = [new Audio('sounds/melody.mp3'), new Audio('sounds/acoustic.mp3'), new Audio('sounds/cosmic.mp3'),
new Audio('sounds/inspiration.mp3'), new Audio('sounds/moonlight.mp3'), new Audio('sounds/lilly.mp3'),
new Audio('sounds/happy.mp3'), new Audio('sounds/hipHop.mp3'), new Audio('sounds/rainy.mp3'),
new Audio('sounds/ocean.mp3')];

function switchButton() {
  // playButtons.forEach(button => button.innerHTML = '►');
  currentButton = document.getElementById(currentSong);
  currentButton.innerHTML = '►';
  playing = true;
}

function changeButton() {
  playing = !playing;
  if(playing === true) {
    this.innerHTML = '❚❚';
  } else {
    this.innerHTML = '►';
  }
}

function transition() {
  music[currentSong].pause();
  music[currentSong].currentTime = 0;
  updateName();
  updatePlayer();
}

function end(song) {
  song.addEventListener('ended', function() {
    currentButton.innerHTML = '►';
  });
}

function updateName() {
  const songName = playButtons[currentSong].parentElement;
  let song = songName.innerText;
  song = song.substring(0, song.length - 2); // gets rid of the play/pause symbol
  name.innerHTML = song;
}

function updatePlayer() {
  if(playing === true) {
    botPlay.innerHTML = '►';
  } else {
    botPlay.innerHTML = '❚❚';
  }
} // does not work for first click on page load

function playerButton() {
  const btn = document.getElementById(currentSong);
  botPlay.innerHTML = btn.innerHTML;
}

function nextSong() {
  if(currentSong !== null) {
    music[currentSong].pause();
    currentSong++;
    updateName();
    changeButton();
    music[currentSong].play();
  }
}

function lastSong() {
  console.log("nice");
}

function togglePlay() {
  if(this.id !== currentSong && currentSong !== null) {
    const btn = document.getElementById(this.id)
    btn.innerHTML = '❚❚';
    transition();
    switchButton();
  }
  const action = music[this.id].paused ? 'play' : 'pause';
  music[this.id][action]();
  currentSong = this.id;
  updatePlayer();
  playerButton();
  playing = !playing;
  changeButton();
  updateName();
  currentlyPlaying = music[this.id];
  end(currentlyPlaying);
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', togglePlay));
name.addEventListener('click', updateName);
forward.addEventListener('click', nextSong);
backward.addEventListener('click', lastSong);
