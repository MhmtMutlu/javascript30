const pressedButtons = [];
const secredCode = "mutlu";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  
  pressedButtons.push(e.key);
  pressedButtons.splice(-secredCode.length - 1, pressedButtons.length - secredCode.length);

  if (pressedButtons.join("").includes(secredCode)) {
    console.log("DING DING!");
    cornify_add();
  }

  console.log(pressedButtons);
})