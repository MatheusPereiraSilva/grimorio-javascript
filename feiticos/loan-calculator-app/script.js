function calculateLoan() {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const months = document.querySelector("#months");
  const result = document.querySelector(".result");
  const loan = (amount.value * (interest.value * 0.01)) / months.value;
  result.textContent = `Your monthly payment will be $${loan.toFixed(2)}`;
}

amount.addEventListener("input", calculateLoan);
interest.addEventListener("input", calculateLoan);
months.addEventListener("input", calculateLoan);
