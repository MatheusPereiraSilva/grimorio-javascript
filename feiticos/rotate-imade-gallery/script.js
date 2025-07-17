const imageContainer = document.querySelector(".image-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let x = 0;
let timer;
function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(()=>{
    x -= 45
    updateGallery();
  }, 3000)
}
prevBtn.addEventListener("click", () => {
  x +=45;
  clearTimeout(timer);
  updateGallery();
})
nextBtn.addEventListener("click", () => {
  x -=45;
  clearTimeout(timer);
  updateGallery();
})
updateGallery();