const clock = document.getElementById("clock");

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
}

tick();
setInterval(tick, 1000);
