document.getElementById('phone-plus').addEventListener('click',function(){
   const phoneInput = document.getElementById('phone-number');
   const phoneNumber= parseInt(phoneInput.value) + 1;
   phoneInput.value = phoneNumber;
})
document.getElementById('phone-minus').addEventListener('click',function(){
   const phoneInput = document.getElementById('phone-number');
   const phoneNumber= parseInt(phoneInput.value) - 1;
   phoneInput.value = phoneNumber;
})