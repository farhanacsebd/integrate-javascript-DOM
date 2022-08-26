document.getElementById("item-btn").addEventListener('click',function(){
    
    const li = document.createElement('li');
    
    li.innerText ='new list item.';
    
    document.getElementById("item-container").appendChild(li);
    
    

})
document.getElementById("item-container").addEventListener('click',function(event){
    
    event.target.parentNode.removeChild(event.target);

})