const container = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
  const colorContainer = document.createElement('section');
  colorContainer.classList.add('color-container');
  container.appendChild(colorContainer);
}
const colorContainerEl = document.querySelectorAll('.color-container');
function generateColors() {
  colorContainerEl.forEach((colorEl)=>{
    const newColorCode = randomColor();
    colorEl.style.backgroundColor = "#" + newColorCode;
    colorEl.innerText = "#" + newColorCode;
  })
}
generateColors();

function randomColor(){
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode ="";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber+1);   
  }
  return colorCode
}
randomColor();