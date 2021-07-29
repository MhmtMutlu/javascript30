/* Get elements */
const playerDOM = document.querySelector(".player");
const videoDOM = playerDOM.querySelector(".viewer");
const progressDOM = playerDOM.querySelector(".progress");
const progressBarDOM = playerDOM.querySelector(".progress__filled");
const toggleDOM = playerDOM.querySelector(".toggle");
const skipButtonsDOM = playerDOM.querySelectorAll("[data-skip]");
const rangesDOM = playerDOM.querySelectorAll(".player__slider");
const fullScreenButtonDOM = playerDOM.querySelector(".fullscreen__button");

/* Build functions */
function togglePlay() {
  const method = videoDOM.paused ? "play" : "pause";
  videoDOM[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggleDOM.textContent = icon;
}

function skip() {
  videoDOM.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  videoDOM[this.name] = this.value;
}

function handleProgress() {
  const percent = (videoDOM.currentTime / videoDOM.duration) * 100;
  progressBarDOM.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressDOM.offsetWidth) * videoDOM.duration;
  videoDOM.currentTime = scrubTime;
}

function handleFullScreen() {
  if (videoDOM.requestFullscreen) {
    videoDOM.requestFullscreen();
  } else if (videoDOM.msRequestFullscreen) {
    videoDOM.msRequestFullscreen();
  } else if (videoDOM.mozRequestFullScreen) {
    videoDOM.mozRequestFullScreen();
  } else if (videoDOM.webkitRequestFullscreen) {
    videoDOM.webkitRequestFullscreen();
  }
}

/* Event listeners */
videoDOM.addEventListener("click", togglePlay);
videoDOM.addEventListener("play", updateButton);
videoDOM.addEventListener("pause", updateButton);
videoDOM.addEventListener("timeupdate", handleProgress);

toggleDOM.addEventListener("click", togglePlay);

skipButtonsDOM.forEach(skipButton => skipButton.addEventListener("click", skip));

rangesDOM.forEach(range => range.addEventListener("change", handleRangeUpdate));
rangesDOM.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progressDOM.addEventListener("click", scrub);
progressDOM.addEventListener("mousemove", () => mousedown && scrub(e));
progressDOM.addEventListener("mousedown", () => mousedown = true);
progressDOM.addEventListener("mouseup", () => mousedown = false);

fullScreenButtonDOM.addEventListener("click", handleFullScreen)


