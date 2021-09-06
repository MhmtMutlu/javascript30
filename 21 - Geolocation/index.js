const arrowDOM = document.querySelector(".arrow");
const speedDOM = document.querySelector(".speed");

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speedDOM.textContent = data.coords.speed;
  arrowDOM.style.transform = `rotate(${data.coords.heading}deg)`;
}, (error) => {
  console.error(error);
});