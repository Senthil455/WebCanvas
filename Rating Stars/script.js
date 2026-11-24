const stars = document.querySelectorAll("#stars button");
const result = document.getElementById("result");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((item, position) => {
      item.classList.toggle("filled", position <= index);
    });
    result.textContent = `You rated this ${index + 1} out of 5`;
  });
});
