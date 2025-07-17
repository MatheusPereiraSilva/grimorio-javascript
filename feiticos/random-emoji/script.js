const btnEl = document.querySelector("#random-emoji-btn");
const emojiName = document.querySelector(".emoji-name");
const APIKey = "93c8213feb7d51b0d0c51f3f58de5d0396d80b46";
const emoji = [];
async function getEmoji() {
  let response = await fetch(
    `https://emoji-api.com/emojis?access_key=${APIKey}`
  );
  let data = await response.json();
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}
getEmoji();
function callEmoji() {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNumber].emojiName;
  emojiName.innerText = emoji[randomNumber].emojiCode;  
}
btnEl.addEventListener("click", callEmoji);
