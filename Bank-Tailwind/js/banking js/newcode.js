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
})