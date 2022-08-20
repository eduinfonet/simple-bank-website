 document.getElementById("btn-withdraw").addEventListener('click', function(){
   // step 01: get amount after clicking withdraw button
   const withdrawField = document.getElementById("withdraw-field");
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);

   withdrawField.value = "";

   //step 02: add amount after clicking withdraw button and previous withdrawal

   const withdrawTotal = document.getElementById("withdraw-total");
   const previousWithdrawString = withdrawTotal.innerText;
   const previousWithdrawAmount = parseFloat(previousWithdrawString);

   const currentWidthdrawTotal = newWithdrawAmount + previousWithdrawAmount;
   withdrawTotal.innerText = currentWidthdrawTotal;

   //step 03: calculate new balance

   const balanceTotal = document.getElementById("balance-total");
   const newBalanceTotalString = balanceTotal.innerText;
   const newBalanceTotal = parseFloat(newBalanceTotalString);

   //console.log(newBalanceTotal);

   const newBalance = newBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newBalance;
 })































