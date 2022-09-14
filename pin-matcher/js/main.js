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
    const keyPad = event.target.innerText;
    const typeNumber = document.getElementById('type-numbers');const previoustype = typeNumber.value;
    const newType = previoustype + keyPad;
    typeNumber.value = newType;
})