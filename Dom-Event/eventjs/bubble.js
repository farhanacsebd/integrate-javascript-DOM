document.getElementById('list-item').addEventListener('click',function(event){
    console.log('list1 item');
    event.stopImmediatePropagation();
})

document.getElementById('list-item').addEventListener('click',function(event){
    console.log('list2 item');
    
}),

document.getElementById('list-item').addEventListener('click',function(event){
    console.log('list3 item');
    
}),

document.getElementById('list-item').addEventListener('click',function(event){
    console.log('list4 item');
    
}),

document.getElementById('list-item').addEventListener('click',function(event){
    console.log('list5 item');
    
}),

// ul
document.getElementById('list-container').addEventListener('click',function(){
    console.log('list-container item');
})

// section
document.getElementById('section-container').addEventListener('click',function(){
    console.log('section-container item');
})