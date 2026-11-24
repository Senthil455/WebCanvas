const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const missing = name.value.trim() === "";
  const badEmail = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim());

  name.classList.toggle("bad", missing);
  email.classList.toggle("bad", badEmail);

  if (missing || badEmail) {
    status.textContent = "Please fill in a name and a valid email.";
    status.classList.add("bad");
    return;
  }

  status.textContent = `Welcome aboard, ${name.value.trim()}!`;
  status.classList.remove("bad");
  form.reset();
});
