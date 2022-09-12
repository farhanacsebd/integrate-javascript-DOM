function getThePhoneIncrease(increase){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(increase){
        caseNumber = parseInt(caseInput.value)+1;
    }
    else if(caseNumber>0){
        caseNumber = parseInt(caseInput.value)-1;  
    }
    caseInput.value =caseNumber;
    const caseTotal = document.getElementById('case-total');
    // const caseTotalPrice = parseInt(caseTotal.innerText);
    const casePrice = caseNumber * 59;
    caseTotal.innerText = casePrice;
}



document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value)+1;
    // caseInput.value =caseNumber;
    getThePhoneIncrease(true) 
})
document.getElementById('case-minus').addEventListener('click',function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber; */
    getThePhoneIncrease(false) 
})