document.getElementById('delete-btn').addEventListener('click',function(){
    
    document.getElementById('secret-info').style.display = 'none';

});

// focus

document.getElementById('delete-confirm').addEventListener('focus',function(){

    document.body.style.backgroundColor = 'lightcoral';

});
// blur

document.getElementById('delete-confirm').addEventListener('blur',function(){

    document.body.style.backgroundColor = 'white';

});

/*   // keyup

document.getElementById('delete-confirm').addEventListener('keyup',function(){

    const field = document.getElementById('delete-confirm');

    console.log(field.value);

}); */

// event

document.getElementById('delete-confirm').addEventListener("keyup",function(event){
    
    if(event.target.value =='delete'){
        document.getElementById('delete-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('delete-btn').setAttribute('disabled',true)
    }

});

// change

/* document.getElementById('delete-confirm').addEventListener('change',function(){

    const field = document.getElementById('delete-confirm');

    console.log(field.value);
    
}); */