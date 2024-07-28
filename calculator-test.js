
it('should calculate the monthly rate correctly', function () {
  // Using values 5000,5,3.5 should give a result of 90.96
  const values ={amount: 5000, years:5, rate:3.5};
  expect(calculateMonthlyPayment(values)).toequal('90.96')
});


it("should return a result with 2 decimal places", function() {
  // check for # of decimal places
  const values ={amount: 9999, years:3, rate:7.5};
  expect(calculateMonthlyPayment(values)).toequal('308.74')
});


/// etc
