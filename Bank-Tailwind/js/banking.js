// handle diposite button event 
document.getElementById('deposite-button').addEventListener('click',function(){
    
    // get the amount diposite 
    const dipositeInput = document.getElementById('deposite-input');
    const dipositeAmount = dipositeInput.value;
    
   console.log(dipositeAmount);

  const dipositeTotal = document.getElementById('deposite-total');
  dipositeTotal.innerText = dipositeAmount;


  dipositeInput.value= '';
})