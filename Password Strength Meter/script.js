const meter = document.querySelector(".meter");
const input = document.getElementById("password");
const label = document.getElementById("label");
const words = ["Start typing", "Weak", "Fair", "Strong", "Excellent"];

input.addEventListener("input", () => {
  const value = input.value;
  let score = 0;

  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  if (value.length === 0) score = 0;

  meter.dataset.score = String(score);
  label.textContent = words[score];
});
