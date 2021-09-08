const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdownDOM = document.querySelector('[name="voice"]');
const optionsDOM = document.querySelectorAll('[type="range"], [name="text"]');
const speakButtonDOM = document.querySelector("#speak");
const stopButtonDOM = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdownDOM.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg)
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdownDOM.addEventListener('change', setVoice);
optionsDOM.forEach(option => option.addEventListener('change', setOption));
speakButtonDOM.addEventListener('click', toggle);
stopButtonDOM.addEventListener('click', toggle.bind(null, false));
