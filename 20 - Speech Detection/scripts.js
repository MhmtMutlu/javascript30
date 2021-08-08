window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let pDOM = document.createElement("p");
const wordsDOM = document.querySelector(".words");
wordsDOM.appendChild(pDOM);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  pDOM.textContent = transcript;
  if(e.results[0].isFinal) {
    pDOM = document.createElement("p");
    wordsDOM.appendChild(pDOM);
  }
    console.log(transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();