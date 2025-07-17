const API_KEY = "gGyTux3xEzDm9tPxvo1Ju1gKul833JYT-P78dypO_S4";
const bntEl = document.querySelector(".btn");
const errorMessageEl = document.querySelector(".error-message");
const galleryEl = document.querySelector(".gallery");

async function fetchImage() {
  const inputValue = document.querySelector("#input").value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.innerText = "Please enter a number between 1 and 10";
    errorMessageEl.style.display = "block";
    return;
  }
  let imgs = "";
  try {
    bntEl.style.display = "none";
    const loading = `<img src="./spinner.svg">`;
    galleryEl.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=${API_KEY}`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `
              <img src=${pic.urls.small} alt+"image">
            `;
            galleryEl.style.display = "block";
            galleryEl.innerHTML = imgs;
            bntEl.style.display = "block";
            errorMessageEl.style.display = "none";
          });
        }
      })
    );
  } catch (error) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "An error happened, try again later";
    bntEl.style.display = "block";
    galleryEl.style.display = "none";
  }
}

bntEl.addEventListener("click", fetchImage);
