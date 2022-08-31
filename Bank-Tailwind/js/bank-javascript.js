// creating the input field function

function getInputField(inputValue){
    const elementInput = document.getElementById(inputValue);
    const newElementAmount = parseFloat(elementInput.value);
    
    // clear value

    elementInput.value = '';

    return newElementAmount;
};


function getTheAmount(totalAmount,newAmount){
    const elementTotal = document.getElementById(totalAmount);
    const previousAmount = parseFloat(elementTotal.innerText);
    elementTotal.innerText = previousAmount + newAmount;
};


function getCurrentBalance(){
    
}


function getThaBalance(balanceAmount,newAmount,isAdd){
    const balanceTotal = document.getElementById(balanceAmount);
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + newAmount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount - newAmount;
    }
};


document.getElementById('deposite-button').addEventListener('click',function(){
 
    const newDipositeAmount = getInputField("deposite-input");
    if(newDipositeAmount>0){
        getTheAmount('deposite-total',newDipositeAmount);
    getThaBalance('balance-total',newDipositeAmount,true);
    }

// diposite input field 

    /* const dipositeInput = document.getElementById("deposite-input");
    const newDipositeAmount = parseFloat(dipositeInput.value); */
    

// diposite value show

/* const dipositeTotal = document.getElementById('deposite-total');
const previousDitositeAmount = parseFloat(dipositeTotal.innerText);
dipositeTotal.innerText = previousDitositeAmount + newDipositeAmount; */



// Balance Increasing

/* const balanceTotal = document.getElementById('balance-total');
const balanceTotalAmount = parseFloat(balanceTotal.innerText);
balanceTotal.innerText = balanceTotalAmount + newDipositeAmount; */



});


//  withdraw filed 

document.getElementById('withdraw-button').addEventListener('click',function(){
  
    const newWithdrawAmount = getInputField('withdraw-input');
    if(newWithdrawAmount > 0){
        getTheAmount('withdraw-total',newWithdrawAmount);
    getThaBalance('balance-total',newWithdrawAmount,false);
    }

    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value); */
   


    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawAmount + newWithdrawAmount; */

    


  
    // set balance total 

   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalAmount - newWithdrawAmount; */
    
    
    

    // clear input field

    // withdrawInput.value ='';
})