const playButtons = document.querySelectorAll('.play');
let playing = false;

function changeButton() {
  playing = !playing;
  if(playing === true) {
    this.innerHTML = '❚❚';
  } else {
    this.innerHTML = '►';
  }
}

function playSound() {
  const song = new Audio(`sounds/${this.id}.mp3`)
  console.log(song);
  song.play();
}

playButtons.forEach(button => button.addEventListener('click', changeButton));
playButtons.forEach(button => button.addEventListener('click', playSound));
