const btnEl = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function generateQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quote.innerText = "Updating...";
    author.innerText = "";
    const randomQuote = await fetch("https://api.quotable.io/random");
    const data = await randomQuote.json();
    quote.innerText = `"${data.content}"`;
    author.innerText = `~ ${data.author}`;
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;
  } catch (error) {
    quote.innerText = "An error happened, please try again later";
  }
}
btnEl.addEventListener("click", generateQuote);
