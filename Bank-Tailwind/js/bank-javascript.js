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


});


//  withdraw filed 

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const TotalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = TotalWithdrawAmount;

  
    // set balance total 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    const totalBalanceAmount = balanceTotalAmount - newWithdrawAmount;
    
    balanceTotal.innerText = totalBalanceAmount;
    

    // clear input field

    withdrawInput.value ='';
})