// set the function 

function handleJustFanctionClick(){
   
    const p = document.getElementById('clicking-method');
   
    p.innerText ='set by using function';

}

// direct function 

document.getElementById('handle-evnt').addEventListener('click',function(){

    const p = document.getElementById('clicking-method');
    
    p.innerText = 'set by direct add event listener'

   })

   // add direct function

document.getElementById('update-name').addEventListener('click',function(){

    const nameField = document.getElementById('name-field');
    
    const p = document.getElementById('clicking-method');
    
    p.innerText = nameField.value;
    
    nameField.value ='';

   })


