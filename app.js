// date for the countdown
const NewYear = new Date("2020-12-31");
// dom
const days = document.querySelector(".days_value");
const hours = document.querySelector(".hours_value");
const minutes = document.querySelector(".minutes_value");
const seconds = document.querySelector(".seconds_value");

function countdown() {
  let date = new Date();
  let joursRestant = Math.round((NewYear - date) / 1000 / 3600 / 24);
  let heureRestant = Math.round((NewYear - date) / 1000 / 3600) % 24;
  let minutesRestant = Math.round((NewYear - date) / 1000 / 60) % 60;
  let secondsRestant = Math.round((NewYear - date) / 1000) % 60;
  console.log(minutes.innerText, minutesRestant);
  hasChanged(days, joursRestant);
  hasChanged(hours, heureRestant);
  hasChanged(minutes, minutesRestant);
  hasChanged(seconds, secondsRestant);
}

setInterval(countdown, 1000);

// 1st param : the div with the time value, 2nd param : the difference betwen now and 2021
function hasChanged(element, valeurRestant) {
  if (element.innerText != valeurRestant) {
    element.innerText = valeurRestant
    element.parentElement.classList.add("active");
  } else {
    element.parentElement.classList.remove("active");
  }
}
