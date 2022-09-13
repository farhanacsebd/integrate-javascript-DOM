function getThePhoneIncrease(product,price,increase){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(increase){
        productNumber = parseInt(productInput.value)+1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productInput.value)-1;  
    }
    productInput.value =productNumber;
    const productTotal = document.getElementById(product + '-total');
    // const caseTotalPrice = parseInt(caseTotal.innerText);
    const productPrice = productNumber * price;
    productTotal.innerText = productPrice;
    getInputValue()
}


function getCalculationTotal(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
} 

function getInputValue(){
    const caseTotal = getCalculationTotal('case')*59;
    const phoneTotal = getCalculationTotal('phone')*1219;
    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}


document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value)+1;
    // caseInput.value =caseNumber;
    getThePhoneIncrease('case',59,true) 
});
document.getElementById('case-minus').addEventListener('click',function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber; */
    getThePhoneIncrease('case',59,false) 
});
document.getElementById('phone-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value)+1;
    // caseInput.value =caseNumber;
    getThePhoneIncrease('phone',1219,true) 
});
document.getElementById('phone-minus').addEventListener('click',function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber; */
    getThePhoneIncrease('phone',1219,false) 
})