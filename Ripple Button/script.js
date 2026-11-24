const button = document.getElementById("ripple");

button.addEventListener("click", (event) => {
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.2;
  const wave = document.createElement("span");

  wave.className = "wave";
  wave.style.width = `${size}px`;
  wave.style.height = `${size}px`;
  wave.style.left = `${event.clientX - rect.left}px`;
  wave.style.top = `${event.clientY - rect.top}px`;

  button.appendChild(wave);
  wave.addEventListener("animationend", () => wave.remove());
});
