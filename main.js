let timer;
let timeInSeconds = 90; // Tiempo inicial 1:30

function setTime(minutes) {
  clearInterval(timer);
  timeInSeconds = minutes * 60;
  document.getElementById('time-display').textContent = `${minutes}:00`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeInSeconds--;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    document.getElementById('time-display').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeInSeconds <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}
