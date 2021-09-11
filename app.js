const playButtons = document.querySelectorAll('.play');
let play = false;

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

function togglePlay() {
  const action = music[this.id].paused ? 'play' : 'pause';
  music[this.id][action]();
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', togglePlay));
