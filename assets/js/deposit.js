// step 01: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
  // step 02 a: get deposit amount from deposit input field (it is string value)
  const depositField = document.getElementById("deposit-field");

  //step 02 b:
  const newDepositAmountString = depositField.value;

  //step 02 c:
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step 03: clear deposit input field after getting value
  depositField.value = "";

  // step 04: getting previous deposit amount/value

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //console.log(previousDepositTotal);

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step 05: calculate new total deposit and set value to total deposit field

  const balanceTotal = document.getElementById("balance-total");
  const newBalanceTotalString = balanceTotal.innerText; 
  const newBalanceTotal = parseFloat(newBalanceTotalString);
  const newBalance = newBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalance;

  //console.log(newDepositTotal);
}) 

//  document.getElementById('btn-deposit').addEventListener('click', function(){
//    const depositAmount = document.getElementById("deposit-amount");
//    const newDepositAmountString = depositAmount.value
//    ;
//    const newDepositAmount = parseFloat(newDepositAmountString);
//    depositAmount.value = "";

//    // step 04: getting previous deposit amount/value

//    const depositTotal = document.getElementById("deposit-total");
//    const previousDepositTotalString = depositTotal.innerText;
//    const previousDepositTotal = parseFloat(previousDepositTotalString);

//    const newDepositTotal = newDepositAmount + previousDepositTotal;
//    depositTotal.innerText = newDepositTotal;

//    console.log('newDepositTotal');
//  })

