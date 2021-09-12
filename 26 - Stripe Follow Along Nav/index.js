const liDOMs = document.querySelectorAll(".cool > li");
const backgroundDOM = document.querySelector(".dropdownBackground");
const navDOM = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 100);
  backgroundDOM.classList.add("open");

  const dropdownDOM = this.querySelector(".dropdown");
  const dropdownCoordinates = dropdownDOM.getBoundingClientRect();
  const navCoordinates = navDOM.getBoundingClientRect();

  const coordinates = {
    width: dropdownCoordinates.width,
    height: dropdownCoordinates.height,
    top: dropdownCoordinates.top - navCoordinates.top,
    left: dropdownCoordinates.left - navCoordinates.left,
  };
  backgroundDOM.style.setProperty("width", `${coordinates.width}px`);
  backgroundDOM.style.setProperty("height", `${coordinates.height}px`);
  backgroundDOM.style.setProperty(
    "transform",
    `translate(${coordinates.left}px, ${coordinates.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  backgroundDOM.classList.remove("open");
}

liDOMs.forEach((link) => link.addEventListener("mouseenter", handleEnter));
liDOMs.forEach((link) => link.addEventListener("mouseleave", handleLeave));
