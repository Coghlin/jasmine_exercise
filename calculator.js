window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initValues = {amount: 20000, years: 6, rate: 3.75};
  const amountUI = document.getElementById('loan-amount');
  amountUI.value = initValues.amount;
  const yearsUI = document.getElementById('loan-years');
  yearsUI.value = initValues.years;
  const rateUI = document.getElementById('loan-rate');
  rateUI.value = initValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(initValues) {
  const rateDecimal = initValues.rate/100;
  const monthlyRate = rateDecimal/12;
  const time = initValues.years*12;
  const monthlyPayment = ((initValues.amount*monthlyRate)/(1-Math.pow((1+monthlyRate),-time))).toFixed(2);
  return(monthlyPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$'+monthlyPayment;
}
