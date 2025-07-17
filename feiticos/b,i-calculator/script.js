const btnEl = document.querySelector(".btn");
const bmiResult = document.querySelector("#bmi-result");
const weightConditionEl = document.querySelector("#weight-condition");

function calculateBMI() {
  const height = document.querySelector("#height").value / 100;
  const weight = document.querySelector("#weight").value;
  const bmiValue = weight / (height * height);
  bmiResult.value = bmiValue;
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Over weight";
  } else {
    weightConditionEl.innerText = "Obesity";
  }
}
btnEl.addEventListener("click", calculateBMI);
