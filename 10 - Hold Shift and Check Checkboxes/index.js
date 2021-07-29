let checkboxesDOM = document.querySelectorAll(".inbox input[type=checkbox]");

let lastCheckedBox;

function handleClick(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxesDOM.forEach(checkbox => {
      if (checkbox === this || checkbox === lastCheckedBox) {
        inBetween = !inBetween;
      };

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }

  lastCheckedBox = this;
}

checkboxesDOM.forEach(checkbox => checkbox.addEventListener("click", handleClick));