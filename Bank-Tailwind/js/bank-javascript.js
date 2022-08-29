document.getElementById('deposite-button').addEventListener('click',function(){
 
// diposite input field 

    const dipositeInput = document.getElementById("deposite-input");
    const newDipositeAmount = parseFloat(dipositeInput.value);

// diposite value show

const dipositeTotal = document.getElementById('deposite-total');
const previousDitositeAmount = parseFloat(dipositeTotal.innerText);
const totalDipositeAmount = previousDitositeAmount + newDipositeAmount;
dipositeTotal.innerText = totalDipositeAmount;


// Balance Increasing

const balanceTotal = document.getElementById('balance-total');
const balanceTotalAmount = parseFloat(balanceTotal.innerText);
const totalBalanceAmount = balanceTotalAmount + newDipositeAmount;

balanceTotal.innerText = totalBalanceAmount;


// clear value

dipositeInput.value = '';


})