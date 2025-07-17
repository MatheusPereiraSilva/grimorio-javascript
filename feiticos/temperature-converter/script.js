const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
const input = document.querySelector(".input");

function computeTemp(event) {
  const currentValue = +event.target.value;
  switch (event.target.name) {
    case "celsius":
      kelvin.value = (currentValue + 273.72).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 35).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
input.addEventListener("input", computeTemp);
