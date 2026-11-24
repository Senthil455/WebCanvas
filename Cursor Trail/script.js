const stage = document.querySelector(".stage");

stage.addEventListener("mousemove", (event) => {
  const rect = stage.getBoundingClientRect();
  const dot = document.createElement("span");

  dot.className = "dot";
  dot.style.left = `${event.clientX - rect.left}px`;
  dot.style.top = `${event.clientY - rect.top}px`;

  stage.appendChild(dot);
  setTimeout(() => dot.remove(), 600);
});
