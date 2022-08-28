// handle diposite button event 

document.getElementById('deposite-button').addEventListener('click',function(){
    
    // get the amount diposited 

    const dipositeInput = document.getElementById('deposite-input');
    const newDipositetext = dipositeInput.value;
    const newDipositeAmount = parseFloat(newDipositetext);

  
    const dipositeTotal = document.getElementById('deposite-total');
  
  const previousDipositeText = dipositeTotal.innerText;
  const previousDipositeAmount = parseFloat(previousDipositeText);
  const newDipositeTotal = previousDipositeAmount + newDipositeAmount;
  
  dipositeTotal.innerText = newDipositeTotal;



//  update account balance 


// clear the diposite input field 
  dipositeInput.value= '';
})