function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const hexColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  hexColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
