const display = document.getElementById("display");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let running = false;
let elapsed = 0;
let startedAt = 0;
let timer = null;

function format(ms) {
  const total = Math.floor(ms / 10);
  const minutes = String(Math.floor(total / 6000)).padStart(2, "0");
  const seconds = String(Math.floor((total % 6000) / 100)).padStart(2, "0");
  const centis = String(total % 100).padStart(2, "0");

  return `${minutes}:${seconds}.${centis}`;
}

function paint() {
  display.textContent = format(elapsed + (running ? Date.now() - startedAt : 0));
}

startButton.addEventListener("click", () => {
  running = !running;

  if (running) {
    startedAt = Date.now();
    timer = setInterval(paint, 30);
    startButton.textContent = "Stop";
    display.classList.add("running");
  } else {
    elapsed += Date.now() - startedAt;
    clearInterval(timer);
    startButton.textContent = "Start";
    display.classList.remove("running");
    paint();
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  elapsed = 0;
  startButton.textContent = "Start";
  display.classList.remove("running");
  paint();
});
