const divsDOM = document.querySelectorAll("div");
const buttonDOM = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divsDOM.forEach((div) => div.addEventListener("click", logText), {
  capture: false,
});
buttonDOM.addEventListener(
  "click",
  () => {
    console.log("Clicked!");
  },
  {
    once: true,
  }
);
