const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

function toggle(open) {
  drawer.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
}

document.getElementById("open").addEventListener("click", () => toggle(true));
document.getElementById("close").addEventListener("click", () => toggle(false));
overlay.addEventListener("click", () => toggle(false));
