const playButtons = document.querySelectorAll('.play');
let currentSong = null;
let currentButton;

const music = [new Audio('sounds/melody.mp3'), new Audio('sounds/acoustic.mp3'), new Audio('sounds/cosmic.mp3'),
new Audio('sounds/inspiration.mp3'), new Audio('sounds/moonlight.mp3'), new Audio('sounds/lilly.mp3'),
new Audio('sounds/happy.mp3'), new Audio('sounds/hipHop.mp3'), new Audio('sounds/rainy.mp3'),
new Audio('sounds/ocean.mp3')];

function changeButton() {
  playButtons.forEach(button => button.innerHTML = '►');
  currentButton = document.getElementById(this.id);
  currentButton.innerHTML = '❚❚';
}

function transition() {
  music[currentSong].pause();
  music[currentSong].currentTime = 0;
}

function togglePlay() {
  if(this.id !== currentSong && currentSong !== null) {
    transition();
  }
  const action = music[this.id].paused ? 'play' : 'pause';
  music[this.id][action]();
  currentSong = this.id;
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', togglePlay));
