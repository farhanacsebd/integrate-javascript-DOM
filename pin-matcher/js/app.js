function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString =pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again',pin);
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value=pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
   const number = event.target.innerText;
   const displayinput = document.getElementById('type-numbers');
  if(isNaN(number)){
    displayinput.value ='';
  }
  else{
    const previousNumber = displayinput.value;
    const newNumber =  previousNumber + number;
    displayinput.value = newNumber;
  }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const displayInput = document.getElementById('type-numbers').value;
    if(pin==displayInput){
        const notifyFail = document.getElementById('notify-Fail').innerText;
    }
    else{
        console.log('fail');
    }
}