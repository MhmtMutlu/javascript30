const secondHandDOM = document.querySelector(".second-hand")
const minHandDOM = document.querySelector(".min-hand")
const hourHandDOM = document.querySelector(".hour-hand")

function setDate() {
  const now = new Date();

  const second = now.getSeconds(); 
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDegrees = ((second / 60) * 360) + 90;
  const minuteDegrees = ((minute / 60) * 360) + 90;
  const hourDegrees = ((hour / 60) * 360) + 90;

  secondHandDOM.style.transform = `rotate(${secondDegrees}deg)`;
  minHandDOM.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHandDOM.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);