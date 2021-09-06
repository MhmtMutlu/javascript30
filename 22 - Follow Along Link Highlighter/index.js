const aDOMs = document.querySelectorAll("a");
const spanDOM = document.createElement("span");

spanDOM.classList.add("highlight");
document.body.appendChild(spanDOM);

function highlightLink() {
  const linkCoordinates = this.getBoundingClientRect();
  const coordinates = {
    width: linkCoordinates.width,
    height: linkCoordinates.height,
    left: linkCoordinates.left + window.scrollX,
    top: linkCoordinates.top + window.scrollY
  };

  spanDOM.style.width = `${coordinates.width}px`;
  spanDOM.style.height = `${coordinates.height}px`;
  spanDOM.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`;
};

aDOMs.forEach(aDOM => aDOM.addEventListener("mouseenter", highlightLink));
