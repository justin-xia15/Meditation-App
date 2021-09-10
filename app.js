const playButtons = document.querySelectorAll('.play');
let playing = false;

// music
const melody = new Audio('sounds/melody-of-nature.mp3');
const acoustic = new Audio('sounds/acoustic-indie-folk.mp3');
const cosmic = new Audio('sounds/cosmic-glow.mp3');
const inspiration = new Audio('sounds/inspiration-piano.mp3');
const moonlight = new Audio('sounds/moonlight-mastered.mp3');
const lilly = new Audio('sounds/water-lilly.mp3');
const happy = new Audio('sounds/happy-days.mp3');
const hipHop = new Audio('sounds/hip-hop-lo-fi.mp3');
const rainy = new Audio('sounds/rainy-day.mp3');
const ocean = new Audio('sounds/ocean-diving-underwater.mp3');



function changeButton() {
  playing = !playing;
  if(playing === true) {
    this.innerHTML = '❚❚';
  } else {
    this.innerHTML = '►';
  }
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
