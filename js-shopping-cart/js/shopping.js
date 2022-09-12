function getThePhoneIncrease(product,price,increase){
    const caseInput = document.getElementById(product +'-number');
    let caseNumber = caseInput.value;
    if(increase){
        caseNumber = parseInt(caseInput.value)+1;
    }
    else if(caseNumber>0){
        caseNumber = parseInt(caseInput.value)-1;  
    }
    caseInput.value =caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    // const caseTotalPrice = parseInt(caseTotal.innerText);
    const casePrice = caseNumber * price;
    caseTotal.innerText = casePrice;
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