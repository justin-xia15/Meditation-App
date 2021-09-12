const playButtons = document.querySelectorAll('.play');
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
}

function end(song) {
  song.addEventListener("ended", function() {
    currentButton.innerHTML = '►';
  });
}

function togglePlay() {
  playing = !playing;
  changeButton();
  if(this.id !== currentSong && currentSong !== null) {
    const btn = document.getElementById(this.id)
    btn.innerHTML = '❚❚';
    transition();
    switchButton();
  }
  const action = music[this.id].paused ? 'play' : 'pause';
  music[this.id][action]();
  currentSong = this.id;

  currentlyPlaying = music[this.id];
  end(currentlyPlaying);
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', togglePlay));
