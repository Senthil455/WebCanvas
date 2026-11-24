const compare = document.getElementById("compare");
const slider = document.getElementById("slider");

slider.addEventListener("input", () => {
  compare.style.setProperty("--pos", `${slider.value}%`);
});
