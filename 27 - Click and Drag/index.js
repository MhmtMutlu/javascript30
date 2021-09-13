const sliderDOM = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

sliderDOM.addEventListener("mousedown", (e) => {
  isDown = true;
  sliderDOM.classList.add("active");
  startX = e.pageX - sliderDOM.offsetLeft;
  scrollLeft = sliderDOM.scrollLeft;
});

sliderDOM.addEventListener("mouseleave", () => {
  isDown = false;
  sliderDOM.classList.remove("active");
});

sliderDOM.addEventListener("mouseup", () => {
  isDown = false;
  sliderDOM.classList.remove("active");
});

sliderDOM.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderDOM.offsetLeft;
  const walk = (x - startX) * 2;
  sliderDOM.scrollLeft = scrollLeft - walk;
});
