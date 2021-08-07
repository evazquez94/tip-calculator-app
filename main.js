// let inputBill = document.getElementById('inputBill');
// inputBill.addEventListener('input', changeHandler);
// function changeHandler() {
//   bill = this.value;  
// }

let buttonPercent = document.getElementsByClassName('item');

for(let i = 0; i < buttonPercent.length; i++) {
  buttonPercent[i].onclick = buttonHandler;
}

function buttonHandler() {
  let bill = document.getElementById('inputBill').value;
  let amountPersons = document.getElementById('inputPersons').value;
  // let tipPercent = this.getAttribute('value') / 100;
  // let tipTotal = bill * tipPercent
  
  let tipAmount = document.getElementById('tipAmount');
  let total = document.getElementById('total');

  // tipAmount.innerHTML = "Lola";
  // total.innerHTML = "Lalo";
  
}
