const videoDOM = document.querySelector('.player');
const canvasDOM = document.querySelector('.photo');
const context = canvasDOM.getContext('2d');
const stripDOM = document.querySelector('.strip');
const snapDOM = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      videoDOM.srcObject = localMediaStream;
      videoDOM.play();
    })
    .catch(error => {
      console.log('OH NO!', error);
    });
};

function paintToCanvas() {
  const width = videoDOM.videoWidth;
  const height = videoDOM.videoHeight;
  canvasDOM.width = width;
  canvasDOM.height = height;

  return setInterval(() => {
    context.drawImage(videoDOM, 0, 0, width, height);
    // take the pixels out
    let pixels = context.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // put them back
    context.putImageData(pixels, 0, 0);
  }, 16);
};

function takePhoto() {
  // played sound
  snapDOM.currentTime = 0;
  snapDOM.play();

  // take the data out of the canvas
  const data = canvasDOM.toDataURL('image/jpeg');
  const linkDOM = document.createElement('a');
  linkDOM.href = data;
  linkDOM.setAttribute('download', 'perfect');
  linkDOM.innerHTML = `<img src='${data}' alt='Perfect Foto' />`;
  stripDOM.insertBefore(linkDOM, stripDOM.firstChild);
};

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
};

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 250] = pixels.data[i + 0]; // RED
    pixels.data[i + 200] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 250] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
};

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
};

getVideo();

videoDOM.addEventListener('canplay', paintToCanvas);