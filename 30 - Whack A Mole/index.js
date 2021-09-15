const holesDOM = document.querySelectorAll(".hole");
const scoreBoardDOM = document.querySelector(".score");
const molesDOM = document.querySelectorAll(".mole");

let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holesDOM);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoardDOM.textContent = 0;
  timeUp = false;
  score = 0
  peep();

  setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
  if(!e.isTrusted) return; // cheater
  score++;
  this.classList.remove("up");
  scoreBoardDOM.textContent = score;
}

molesDOM.forEach(mole => mole.addEventListener("click", bonk));

