const btnEl = document.querySelector('#calculate');
const billEl = document.querySelector('#bill');
const tipEl = document.querySelector('#tip');
const totalEl = document.querySelector('#total')

function calculate(){
  const billValue = billEl.value;
  const tipValue = tipEl.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalEl.innerText = ` $${totalValue.toFixed(2)}`;
}

btnEl.addEventListener('click', calculate);