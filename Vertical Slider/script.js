const level = document.getElementById("level");
const readout = document.getElementById("readout");

level.addEventListener("input", () => {
  readout.textContent = `${level.value}%`;
});
