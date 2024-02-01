const btn = document.getElementById("btn");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTip() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2);

  console.log(totalValue);
}

btn.addEventListener("click", calculateTip);
