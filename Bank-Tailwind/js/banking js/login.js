document.getElementById('login-submit').addEventListener('click',function(){
    const inputField = document.getElementById('user-email');const inputValue =inputField.value;
    

    const inputpass = document.getElementById('user-password');
    const inputUser = inputpass.value;
    

    if((inputValue =='farhana') && (inputUser =='1234')){
        window.location.href='banking.html'
    }
    else{
        alert('rong password')
    } 
})