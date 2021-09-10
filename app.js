const playButtons = document.querySelectorAll(".play");
let playing = false;

function changeButton() {
  playing = !playing;
  if(playing === true) {
    this.innerHTML = '❚ ❚';
  } else {
    this.innerHTML = '►';
  }
}

playButtons.forEach(button => button.addEventListener("click", changeButton));
