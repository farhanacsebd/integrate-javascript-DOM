function getThePhoneIncrease(){
    
}



document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)+1;
    caseInput.value =caseNumber;
})
document.getElementById('case-minus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber;
})