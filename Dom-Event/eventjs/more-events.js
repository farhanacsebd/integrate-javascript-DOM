document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secret-info').style.display='none';
});

//focus
document.getElementById('delete-confirm').addEventListener('focus',function(){
 
   document.body.style.backgroundColor =' lightcoral';

});

// blur

document.getElementById('delete-confirm').addEventListener('blur',function(){

   document.body.style.backgroundColor ='white';

});

/*  // keydown

document.getElementById('delete-confirm').addEventListener('keydown',function(){

   const deleteField = document.getElementById('delete-confirm');
   console.log(deleteField.value);

}); */


/*  // keypress

document.getElementById('delete-confirm').addEventListener('keypress',function(){

   const deleteField = document.getElementById('delete-confirm');
   console.log(deleteField.value);

}); */

/* // keyup

document.getElementById('delete-confirm').addEventListener('keyup',function(){

   const deleteField = document.getElementById('delete-confirm');
   console.log(deleteField.value);

}); */


// event

document.getElementById('delete-confirm').addEventListener('keyup',function(event){

    const deletebtn = document.getElementById('delete-btn');
   if(event.target.value=='delete'){
    deletebtn.removeAttribute('disabled');
   }
   else{
    deletebtn.setAttribute('disabled',true)
   }
   
});


// change
document.getElementById('delete-confirm').addEventListener('change',function(){
   const deleteField = document.getElementById('delete-confirm');
   console.log(deleteField.value);
});