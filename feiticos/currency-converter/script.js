const currencyFirstEl = document.querySelector("#currency-first");
const currencySecondEl = document.querySelector("#currency-second");
const worthFirstValue = document.querySelector("#worth-first");
const worthSecondValue = document.querySelector("#worth-second");
const converterText = document.querySelector(".converter-text");
const APIKey = "69ab5d814987677453f1d052";

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/${APIKey}latest/${currencyFirstEl.value}`
  ).then((res) => res.json()).then((data)=>{
    const rate = data.conversion_rates[currencySecondEl.value];
      converterText.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      worthSecondValue.value = (worthFirstValue.value * rate).toFixed(2)
  });
}
updateRate()

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstValue.addEventListener("input", updateRate);
