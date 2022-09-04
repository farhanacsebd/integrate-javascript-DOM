function updateInputField(product){
    const dipositeInput = document.getElementById(product);
    const dipositeText = dipositeInput.value;
    const dipositeNewAmount = parseFloat(dipositeText);
    // clear input field 

    dipositeInput.value = ''; 
    
    return dipositeNewAmount;
}

function getUpdateField(fieldTotal,newAmount){
    const dipositeField = document.getElementById(fieldTotal);
    const previousDiposite = dipositeField.innerText;
    const previousDipositeAmount = parseFloat(previousDiposite);
    const totalDipositeAmount = newAmount + previousDipositeAmount;
    dipositeField.innerText = totalDipositeAmount;
}
function updateBalanceTotal(isOdd,newAmount){
  // updated balance
    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceText);
    if(isOdd){
        balanceField.innerText = balanceAmount + newAmount;
    }
    else{
        balanceField.innerText = balanceAmount - newAmount;
    }
    
}




document.getElementById('deposite-button').addEventListener('click',function(){
   const dipositeNewAmount = updateInputField('deposite-input')

   getUpdateField('deposite-total',dipositeNewAmount)
   updateBalanceTotal(true,dipositeNewAmount)
   /*  // updated balance
    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceText);
    const dipositeBalanceIs = balanceAmount + dipositeNewAmount;
    balanceField.innerText = dipositeBalanceIs; */
});

document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawNewAmount = updateInputField('withdraw-input');

    getUpdateField('withdraw-total',withdrawNewAmount)


    updateBalanceTotal(false,withdrawNewAmount)
})


