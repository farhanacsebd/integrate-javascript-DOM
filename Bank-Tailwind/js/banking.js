//using function
function inputField(){
    const dipositeInput = document.getElementById('deposite-input');
    const newDipositetext = dipositeInput.value;
    const newDipositeAmount = parseFloat(newDipositetext);

    // clear the diposite input field 
    dipositeInput.value= '';

    return newDipositeAmount;
}

// handle diposite button event 

document.getElementById('deposite-button').addEventListener('click',function(){
    
    // get the amount diposited 

    /* const dipositeInput = document.getElementById('deposite-input');
    const newDipositetext = dipositeInput.value;
    const newDipositeAmount = parseFloat(newDipositetext); */
    const newDipositeAmount = inputField();
//  update diposite total 

    const dipositeTotal = document.getElementById('deposite-total');
  
  const previousDipositeText = dipositeTotal.innerText;
  const previousDipositeAmount = parseFloat(previousDipositeText);
  dipositeTotal.innerText = previousDipositeAmount + newDipositeAmount;
  
 



//  update account balance 
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount =parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceAmount + newDipositeAmount;

  
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


 // update balance total

 const balanceTotal = document.getElementById('balance-total');
 const previousBalanceText = balanceTotal.innerText;
 const previousBalanceTotal =parseFloat(previousBalanceText);
 const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
 balanceTotal.innerText = newBalanceTotal;

// clear the withdraw input field 

    withdrawInput.value = '';

})