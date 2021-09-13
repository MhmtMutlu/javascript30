const videoDOM = document.querySelector(".flex");
const speedDOM = document.querySelector(".speed");
const speedBarDOM = document.querySelector(".speed-bar");

speedDOM.addEventListener("mousemove", function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playBackRate = percent * (max - min) + min;

  speedBarDOM.style.height = height;
  speedBarDOM.textContent = playBackRate.toFixed(2) + 'x';
  videoDOM.playbackRate = playBackRate;
})