const inputValue = document.querySelector("#input");
const paragraphEl = document.querySelector(".info-text");
const meaningEl = document.querySelector(".meaning-container");
const meaningEL = document.querySelector(".meaning");
const wordEl = document.querySelector(".title");
const audioEl = document.querySelector("#audio");

async function fetchAPI(word) {
  try {
    meaningEl.style.display = "none";
    paragraphEl.style.display = "block";
    paragraphEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    if (result.title) {
      paragraphEl.style.display = "none";
      meaningEl.style.display = "block";
      wordEl.innerText = word;
      meaningEL.innerText = "Not available word, try again";
      audioEl.style.display = "none";
    } else {
      paragraphEl.style.display = "none";
      meaningEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      wordEl.innerText = result[0].word;
      meaningEL.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    paragraphEl.innerText = `An error happened, try again later!"`;
  }
}

inputValue.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
