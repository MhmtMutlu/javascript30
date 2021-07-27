const canvasDOM = document.querySelector("#draw");
const context = canvasDOM.getContext("2d");

canvasDOM.width = window.innerWidth;
canvasDOM.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) {
    return
  }
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >= 365) {
    hue = 0
  }

  if (context.lineWidth >= 120 || context.lineWidth <= 1) {
    direction = !direction
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
};

canvasDOM.addEventListener("mousemove", draw);
canvasDOM.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvasDOM.addEventListener("mouseup", () => isDrawing = false);
canvasDOM.addEventListener("mouseout", () => isDrawing = false);