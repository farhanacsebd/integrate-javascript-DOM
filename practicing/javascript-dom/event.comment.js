function handleJustClick(){
        
    document.body.style.backgroundColor = 'yellow';
    
    
    const p = document.getElementById('clicking-method');
    p.innerText='set the value';

}
document.getElementById('handle-event').addEventListener('click',function(){
    
    document.body.style.backgroundColor = 'red';
    
   
    const p = document.getElementById('clicking-method');
    p.innerText = 'set the direct value';

});



document.getElementById('name-update').addEventListener('click',function(){

    const nameField = document.getElementById('name-field');
    
    
    const p = document.getElementById("clicking-method");
    p.innerText = nameField.value;
    
    nameField.value = '';
})
