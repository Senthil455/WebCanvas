const lightbox = document.getElementById("lightbox");
const view = document.getElementById("view");
const label = document.getElementById("label");

document.querySelectorAll(".thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    view.style.background = thumb.dataset.bg;
    label.textContent = thumb.textContent.trim();
    lightbox.classList.add("open");
  });
});

document.getElementById("close").addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.classList.remove("open");
});
