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
    console.log('sdfsdf');
})


