//using function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const amountValue = parseFloat(inputText);

    // clear the diposite input field 
    inputField.value= '';

    return amountValue;
}


function updatedTotalField(totalFieldId,amount){

    const inputElementField = document.getElementById(totalFieldId);
  
    const previousText = inputElementField.innerText;
    const previousAmount = parseFloat(previousText);
    inputElementField.innerText = previousAmount + amount;

}



function updateBalance(amount,isAdd){
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount =parseFloat(previousBalanceText);
   if(isAdd == true){ 
   balanceTotal.innerText = previousBalanceAmount + amount;
   }
   else{
    balanceTotal.innerText = previousBalanceAmount - amount;
   }

}

// handle diposite button event 

document.getElementById('deposite-button').addEventListener('click',function(){
    
    // get and update the amount diposited 

    /* const dipositeInput = document.getElementById('deposite-input');
    const newDipositetext = dipositeInput.value;
    const newDipositeAmount = parseFloat(newDipositetext); */
   
  const newDipositeAmount = getInputValue('deposite-input');


    //  update diposite total 

  /*   const dipositeTotal = document.getElementById('deposite-total');
  
  const previousDipositeText = dipositeTotal.innerText;
  const previousDipositeAmount = parseFloat(previousDipositeText);
  dipositeTotal.innerText = previousDipositeAmount + newDipositeAmount; */
  
  updatedTotalField('deposite-total',newDipositeAmount)



//  update account balance 
    
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount =parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceAmount + newDipositeAmount; */

  
    updateBalance(newDipositeAmount,true)

});



// handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText); */

  const newWithdrawAmount = getInputValue('withdraw-input');

// set withdraw total 

   /*  const withdrawTotal =document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal; */



  updatedTotalField('withdraw-total',newWithdrawAmount)


 // update balance total

 /* const balanceTotal = document.getElementById('balance-total');
 const previousBalanceText = balanceTotal.innerText;
 const previousBalanceTotal =parseFloat(previousBalanceText);
 const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
 balanceTotal.innerText = newBalanceTotal; */

// clear the withdraw input field 

    // withdrawInput.value = '';
updateBalance(newWithdrawAmount,false)
})