const playButtons = document.querySelectorAll('.play');
let play = false;
let currentSong = null;

const music = [new Audio('sounds/melody.mp3'), new Audio('sounds/acoustic.mp3'), new Audio('sounds/cosmic.mp3'),
new Audio('sounds/inspiration.mp3'), new Audio('sounds/moonlight.mp3'), new Audio('sounds/lilly.mp3'),
new Audio('sounds/happy.mp3'), new Audio('sounds/hipHop.mp3'), new Audio('sounds/rainy.mp3'),
new Audio('sounds/ocean.mp3')];

function changeButton() {
  play = !play;
  if(play === true) {
    this.innerHTML = '❚❚';
  } else {
    this.innerHTML = '►';
  }
}

function transition() {
  music[currentSong].pause();
  const previousButton = document.getElementById(currentSong);
  if(play === true) {
    previousButton.innerHTML = '❚❚';
  } else {
    previousButton.innerHTML = '►';
  }
}

function togglePlay() {
  changeButton();
  if(this.id !== currentSong && currentSong !== null) {
    transition();
  }
  const action = music[this.id].paused ? 'play' : 'pause';
  music[this.id][action]();
  currentSong = this.id;
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', togglePlay));
