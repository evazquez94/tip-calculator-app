// let inputCustomTip = document.getElementById('inputCustomTip');
// inputCustomTip.addEventListener('input', changeHandler);
// function changeHandler() {
//   tip = this.value;  
// }

let buttonPercentArr = document.getElementsByName('item');
let tipAmountTag = document.getElementById('tipAmount');
let totalTag = document.getElementById('total');

for(let i = 0; i < buttonPercentArr.length; i++) {
  buttonPercentArr[i].onclick = handleTipClick;
}

function handleTipClick() {
  if (this.className == 'button-clicked') {
    this.className = 'item';
    tipAmountTag.innerHTML = '0.00';
    totalTag.innerHTML = '0.00'; 
  } else {
    // Map function instead of for loop?
    for(let i = 0; i < buttonPercentArr.length; i++) {    
      buttonPercentArr[i].className = 'item';
    }
    this.className = 'button-clicked';
    computeTip(this.value);
  }
}

function computeTip(percent = 0) {  
  let bill = document.getElementById('inputBill').value;
  let amountPersons = document.getElementById('inputPersons').value;

  let tipPercent = percent / 100;
  let tipAmount = bill/amountPersons * tipPercent;
  let tipTotal = bill/amountPersons + tipAmount;

  tipAmount = +tipAmount.toFixed(2);
  tipTotal = +tipTotal.toFixed(2);
  tipAmountTag.innerHTML = tipAmount;
  totalTag.innerHTML = tipTotal; 
}
