const btnEl = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke");
const API_KEY = "xKJCD1ci1zPHEIKFrZ3Riw==ckaHsyctEiyrNnm5";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";
jokeEl.textContent = "Click in the button to call a joke";
btnEl.innerText = "Tell me a Joke";

async function getJoke() {
  try {
    jokeEl.innerText = "Generating...";
    btnEl.disabled = true;
    btnEl.innerText = "Generating a Joke";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  } catch (error) {
    jokeEl.innerText = "The Joke is so funny for me to tell you, please try again";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);
