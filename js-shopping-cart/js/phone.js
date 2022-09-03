function updateproductnumber(increaseNumber){
   const phoneInput = document.getElementById('phone-number');
   let phoneNumber= phoneInput.value;
   if(increaseNumber){
       phoneNumber= parseInt(phoneInput.value) + 1;
   }
   else if(phoneNumber>0){
       phoneNumber= parseInt(phoneInput.value) - 1;
   }
   phoneInput.value = phoneNumber;
   const phoneTotal = document.getElementById('phone-total');
   phoneTotal.innerText = phoneNumber * 1219;
}

// phone
document.getElementById('phone-plus').addEventListener('click',function(){
   updateproductnumber(true)
});
document.getElementById('phone-minus').addEventListener('click',function(){
   updateproductnumber(false)
});
