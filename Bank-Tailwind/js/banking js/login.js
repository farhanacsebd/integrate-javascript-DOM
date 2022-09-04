document.getElementById('login-submit').addEventListener('click',function(){
    const inputField = document.getElementById('user-email');
    const inputUser = inputField.value;


    const passField = document.getElementById('user-password');
    const passUser = passField.value;

    if((inputUser == 'farhana') && (passUser =='123')){
        window.location.href='banking.html'
    }
    else if((inputUser == 'farhana') && passUser != '123'){
        passField.value = '';
        alert('Rong Password')
    }
    else{
        inputField.value = '';
        passField.value = '';
        alert('try again')
    }

})

/* document.getElementById('login-submit').addEventListener('click',function(){
    const inputField = document.getElementById('user-email');const inputValue =inputField.value;
    

    const inputpass = document.getElementById('user-password');
    const inputUser = inputpass.value;
    

    if((inputValue =='farhana') && (inputUser =='1234')){
        window.location.href='banking.html'
    }
    else{
        alert('rong password')
    } 
}) */