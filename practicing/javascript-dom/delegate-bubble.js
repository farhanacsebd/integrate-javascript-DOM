document.getElementById("item-btn").addEventListener('click',function(event){
    
    const li = document.createElement('li');
    
    li.innerText ='new list item.';
    
    document.getElementById("item-container").appendChild(li);
    
    event.target.parentNode;

})
document.getElementById("item-container").addEventListener('click',function(event){
    
    event.target.parentNode.removeChild(event.target);

})