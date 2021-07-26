const panelsDOM = document.querySelectorAll(".panel")

panelsDOM.forEach(panel => panel.addEventListener("click", () => {
  panel.classList.toggle("open")
}))

panelsDOM.forEach(panel => panel.addEventListener("transitionend", (e) => {
  if(e.propertyName !== "font-size") {
    panel.classList.toggle("open-active")
  }
}))