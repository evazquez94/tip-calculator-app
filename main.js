let buttonPercentArr = document.getElementsByName('item');
let tipAmountTag = document.getElementById('tipAmount');
let totalTag = document.getElementById('total');
let billInput = document.getElementById('inputBill');
let amountPersonsInput = document.getElementById('inputPersons');
let resetButton = document.getElementById('resetButton');
let alertZeroParagraph = document.getElementById('alertZero');
let customInput = document.getElementById('customInput');

[bill, persons, percent] = [0, 0, 0];

resetButton.addEventListener('click', function() {
  billInput.value = '';
  amountPersonsInput.value = '';
  customInput.value = '';
  tipAmountTag.innerHTML = '0.00';
  totalTag.innerHTML = '0.00'; 
  alertZeroParagraph.className = 'notZero';
  amountPersonsInput.className = '';  
  this.className = 'button-disabled';
  bill = 0;
  persons = 0;
  percent = 0;
  for(let i = 0; i < buttonPercentArr.length; i++) {    
    buttonPercentArr[i].className = 'item';
  }
});

billInput.addEventListener('input', function() {
  resetButton.className = '';
  bill = this.value;  
  // Prevent letters inputs
  if(isNaN(bill)) {
    this.value = "";
    return;
  }

  if((persons > 0) && (percent)) computeTip(percent);
});

amountPersonsInput.addEventListener('input', function() {
  resetButton.className = '';
  persons = this.value; 
  // Prevent letters inputs
  if(isNaN(persons)) {
    this.value = "";
    return;
  }

  if(persons > 0) {
    alertZeroParagraph.className = 'notZero';
    amountPersonsInput.className = '';    
  } else {
    alertZeroParagraph.className = 'zero';
    amountPersonsInput.className = 'input-zero';
    tipAmountTag.innerHTML = '0.00';
    totalTag.innerHTML = '0.00';
  }

  if((persons > 0) && (percent)) computeTip(percent);
});

function handleTipClick() {
  resetButton.className = '';
  if (this.className == 'button-clicked') {
    this.className = 'item';
    tipAmountTag.innerHTML = '0.00';
    totalTag.innerHTML = '0.00'; 
    percent = customInput.value || 0;
    if((persons > 0) && (percent)) computeTip(percent);
  
  } else {
    for(let i = 0; i < buttonPercentArr.length; i++) {    
      buttonPercentArr[i].className = 'item';
    }
    this.className = 'button-clicked';   
    percent = this.value;
    if(persons > 0) computeTip(percent);    
  }
}

// Cycle to assign to all percent squares elements onclick handler function
for(let i = 0; i < buttonPercentArr.length; i++) {
  buttonPercentArr[i].onclick = handleTipClick;
}

customInput.addEventListener('input', function() {
  resetButton.className = '';
  min = 0;
  max = 100;

  if(this.value > 100) {
    this.value = Math.max(percent, min);
    this.value = Math.min(percent, max);
    return;
  };

  percent = this.value;
  // Prevent letters inputs
  if(isNaN(percent)) {
    this.value = "";
    return;
  }
  
  if(persons > 0) computeTip(percent);    
});

function computeTip(percent) {  
  // Prevent 0/0 division
  if((!persons) || (!bill)) return;
    
  let tipPercent = percent / 100;
  let tipAmount = bill/persons * tipPercent;
  let tipTotal = bill/persons + tipAmount;
   
  // Todo check the '+'
  tipAmount = tipAmount.toFixed(2);
  tipTotal = tipTotal.toFixed(2);
  tipAmountTag.innerHTML = tipAmount;
  totalTag.innerHTML = tipTotal; 
}
