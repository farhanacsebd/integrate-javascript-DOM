document.getElementById('deposite-button').addEventListener('click',function(){
    const dipositeInput = document.getElementById('deposite-input');
    const dipositeText = dipositeInput.value;
    const dipositeNewAmount = parseFloat(dipositeText);
    dipositeInput.value = dipositeNewAmount;


    const dipositeField = document.getElementById('deposite-total');
    const previousDiposite = dipositeField.innerText;
    const previousDipositeAmount = parseFloat(previousDiposite);
    const totalDipositeAmount = dipositeNewAmount + previousDipositeAmount;
    dipositeField.innerText = totalDipositeAmount;


    // clear input field 

    dipositeInput.value = ''; 

    // updated balance
    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceText);
    const dipositeBalanceIs = balanceAmount + dipositeNewAmount;
    balanceField.innerText = dipositeBalanceIs;
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawNewAmount = parseFloat(withdrawText);
    withdrawInput.value = withdrawNewAmount;

    const withdrawField = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdraw);
    const totalWithdrawAmount = previousWithdrawAmount + withdrawNewAmount;
    withdrawField.innerText = totalWithdrawAmount;
    // clear filed 
    withdrawInput.value ='';


     // updated withdraw balance
     const balanceField = document.getElementById('balance-total');
     const balanceText = balanceField.innerText;
     const balanceAmount = parseFloat(balanceText);
     const withdrawBalanceIs = balanceAmount - withdrawNewAmount;
     balanceField.innerText = withdrawBalanceIs;
})


