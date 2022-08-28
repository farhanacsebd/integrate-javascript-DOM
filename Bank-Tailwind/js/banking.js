// handle diposite button event 

document.getElementById('deposite-button').addEventListener('click',function(){
    
    // get the amount diposited 

    const dipositeInput = document.getElementById('deposite-input');
    const newDipositetext = dipositeInput.value;
    const newDipositeAmount = parseFloat(newDipositetext);

//  update diposite total 

    const dipositeTotal = document.getElementById('deposite-total');
  
  const previousDipositeText = dipositeTotal.innerText;
  const previousDipositeAmount = parseFloat(previousDipositeText);
  const newDipositeTotal = previousDipositeAmount + newDipositeAmount;
  
  dipositeTotal.innerText = newDipositeTotal;



//  update account balance 
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount =parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDipositeAmount;
    balanceTotal.innerText = newBalanceTotal;

// clear the diposite input field 
  dipositeInput.value= '';
});



// handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

// set withdraw total 

    const withdrawTotal =document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

// clear the withdraw input field 

    withdrawInput.value = '';
})