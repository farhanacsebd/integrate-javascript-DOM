// creating the input field function

function getInputField(inputValue){
    const elementInput = document.getElementById(inputValue);
    const newElementAmount = parseFloat(elementInput.value);
    
    // clear value

    elementInput.value = '';

    return newElementAmount;
}


function getTheAmount(totalAmount,newDipositeAmount){
    const dipositeTotal = document.getElementById(totalAmount);
    const previousDitositeAmount = parseFloat(dipositeTotal.innerText);
    dipositeTotal.innerText = previousDitositeAmount + newDipositeAmount;
}





document.getElementById('deposite-button').addEventListener('click',function(){
 
// diposite input field 

    /* const dipositeInput = document.getElementById("deposite-input");
    const newDipositeAmount = parseFloat(dipositeInput.value); */
    const newDipositeAmount = getInputField("deposite-input");

// diposite value show

/* const dipositeTotal = document.getElementById('deposite-total');
const previousDitositeAmount = parseFloat(dipositeTotal.innerText);
dipositeTotal.innerText = previousDitositeAmount + newDipositeAmount; */
getTheAmount('deposite-total',newDipositeAmount);


// Balance Increasing

const balanceTotal = document.getElementById('balance-total');
const balanceTotalAmount = parseFloat(balanceTotal.innerText);
balanceTotal.innerText = balanceTotalAmount + newDipositeAmount;



});


//  withdraw filed 

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value); */
    const newWithdrawAmount = getInputField('withdraw-input');


    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawAmount + newWithdrawAmount; */

    getTheAmount('withdraw-total',newWithdrawAmount)


  
    // set balance total 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalAmount - newWithdrawAmount;
    
    
    

    // clear input field

    // withdrawInput.value ='';
})