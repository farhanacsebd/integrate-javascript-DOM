document.getElementById('login-submit').addEventListener('click',function(){
    

    // get user email

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);


    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    // checking email or password

    if((userEmail == "abc@mail.com") && (userPassword == "secret")){
        window.location.href ='banking.html'
    }
    else{
        alert("This password is wrong.")
    }
})