const toasts = document.getElementById("toasts");
let count = 0;

document.getElementById("trigger").addEventListener("click", () => {
  count += 1;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = `Notification ${count} has arrived`;

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("leaving");
    toast.addEventListener("animationend", () => toast.remove());
  }, 2600);
});
