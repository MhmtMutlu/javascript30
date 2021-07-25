const inputs = document.querySelectorAll(".controls input")

function changeVariables() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change", changeVariables))
inputs.forEach(input => input.addEventListener("mousemove", changeVariables))