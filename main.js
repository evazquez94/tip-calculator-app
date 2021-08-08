let buttonPercentArr = document.getElementsByName('item');
let tipAmountTag = document.getElementById('tipAmount');
let totalTag = document.getElementById('total');
let billInput = document.getElementById('inputBill');
let amountPersonsInput = document.getElementById('inputPersons');
let resetButton = document.getElementById('resetButton');
let alertZeroParagraph = document.getElementById('alertZero');
let customInput = document.getElementById('customInput');

// TODO destructure?
let bill = 0;
let persons = 0;
let percent = 0;

resetButton.addEventListener('click', resetHandler);
function resetHandler() {
  billInput.value = '';
  amountPersonsInput.value = '';
  customInput.value = '';
  tipAmountTag.innerHTML = '0.00';
  totalTag.innerHTML = '0.00'; 
  bill = 0;
  persons = 0;
  percent = 0;
  for(let i = 0; i < buttonPercentArr.length; i++) {    
    buttonPercentArr[i].className = 'item';
  }
  alertZeroParagraph.className = 'notZero';
  amountPersonsInput.className = ''; 
}

billInput.addEventListener('input', changeBillHandler);
function changeBillHandler() {
  bill = this.value;  
  
  // Prevent letters inputs
  if(isNaN(bill)) {
    this.value = "";
    return;
  }

  if((persons > 0) && (percent)) computeTip(percent);
}

amountPersonsInput.addEventListener('input', changePersonsHandler);
function changePersonsHandler() {
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
  }

  if((persons > 0) && (percent)) computeTip(percent);
}

// Cycle to assign to all percent squares elements onclick handler function
for(let i = 0; i < buttonPercentArr.length; i++) {
  buttonPercentArr[i].onclick = handleTipClick;
}

function handleTipClick() {
  if (this.className == 'button-clicked') {

    this.className = 'item';
    tipAmountTag.innerHTML = '0.00';
    totalTag.innerHTML = '0.00'; 
    percent = customInput.value || 0;
    console.log(customInput.value);
    console.log(percent);
    if((persons > 0) && (percent)) computeTip(percent);

  } else {
    // TODO Map function instead of for loop?
    for(let i = 0; i < buttonPercentArr.length; i++) {    
      buttonPercentArr[i].className = 'item';
    }
    this.className = 'button-clicked';   
    percent = this.value;
    if(persons > 0) computeTip(percent);    
  }
}

customInput.addEventListener('input', function() {  
  percent = this.value;
  min = 0;
  max = 100;

  this.value = Math.max(percent, min);
  this.value = Math.min(percent, max);

  if(persons > 0) computeTip(percent);    
});


function computeTip(percent) {  
  // Prevent 0/0 division
  if((!persons) || (!bill)) return;
  
  // Todo put the variables declaration in the top of the page
  let tipPercent = percent / 100;
  let tipAmount = bill/persons * tipPercent;
  let tipTotal = bill/persons + tipAmount;
   
  // Todo check the '+'
  tipAmount = +tipAmount.toFixed(2);
  tipTotal = +tipTotal.toFixed(2);
  tipAmountTag.innerHTML = tipAmount;
  totalTag.innerHTML = tipTotal; 
}


//Todo button disabled when reset or initial state
