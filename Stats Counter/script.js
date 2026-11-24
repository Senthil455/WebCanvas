const values = document.querySelectorAll(".value");

values.forEach((element) => {
  const target = Number(element.dataset.target);
  const step = Math.max(1, Math.round(target / 40));
  let current = 0;

  const timer = setInterval(() => {
    current += step;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current;
  }, 25);
});
