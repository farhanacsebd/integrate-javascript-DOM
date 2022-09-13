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
    const caseTotal = document.getElementById(product + '-total');
    // const caseTotalPrice = parseInt(caseTotal.innerText);
    const casePrice = productNumber * price;
    caseTotal.innerText = casePrice;
}


function getCalculation(){

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