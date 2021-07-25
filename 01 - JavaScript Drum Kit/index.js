
function playAudio(e) {
  const audioDOM = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  // if audioDOM did not exist, function will finish
  if (!audioDOM) return;
  // if the button is pressed consecutively, audio will be rewinded
  audioDOM.currentTime = 0;
  audioDOM.play();

  key.classList.add("playing")
}

function removePlayingClass(e) {
  // if target's propertyName is not transform, skip it
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removePlayingClass))
window.addEventListener('keydown', playAudio);