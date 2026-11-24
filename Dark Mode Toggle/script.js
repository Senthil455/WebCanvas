const toggle = document.getElementById("theme");
const preview = document.getElementById("preview");

toggle.addEventListener("change", () => {
  preview.classList.toggle("light", !toggle.checked);
});
