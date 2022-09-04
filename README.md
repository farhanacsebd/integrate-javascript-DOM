# integrate-javascript-DOM

#### Those function donot have perametter that is call Anonynous function.

`banking login`
```javascript
document.getElementById('login-submit').addEventListener('click',function(){
     // get user email
    const inputField = document.getElementById('user-email');
    const inputUser = inputField.value;

     // get user password
     
    const passField = document.getElementById('user-password');
    const passUser = passField.value;


     // checking email or password
     
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
```

