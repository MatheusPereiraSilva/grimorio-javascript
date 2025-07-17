const { NekosAPI } = require("nekosapi");
const btn = document.querySelector(".btn");
const animeContainer = document.querySelector(".anime-container");
const imgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");
const nekos = new NekosAPI();
btn.addEventListener("click", function (e) {
  e.preventDefault();
  animeContainer.style.display = "block";
  nekos.getRandomImage((categories = ["catgirl"])).then((image) => {
    imgEl.src = `${image.url}`;
    animeNameEl.textContent = `${image.name}`;
  });
});
