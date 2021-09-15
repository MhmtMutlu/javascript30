let countdown;
const timerDisplayDOM = document.querySelector(".display__time-left");
const endTimeDOM = document.querySelector(".display__end-time");
const buttonsDOM = document.querySelectorAll("[data-time]");

function timer(seconds) {
  // clear any existing timer
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if timer should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display timer
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}`;
  document.title = display;
  timerDisplayDOM.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTimeDOM.textContent = `Be back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttonsDOM.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
