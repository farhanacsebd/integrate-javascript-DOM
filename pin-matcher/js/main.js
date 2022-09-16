function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
       return getPin();
    }
}


function generatePin(){
    const pin = getPin();
   document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumber = document.getElementById('type-numbers');
    if(isNaN(number)){
        typeNumber.value = '';
    }
    else{
        const previoustype = typeNumber.value;
        const newType = previoustype + number;
        typeNumber.value = newType;
    }
})


function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const displayInput = document.getElementById('type-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-Fail');
    if(pin==displayInput){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
       
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}