function updateproductnumber(product,price,increaseNumber){
   const productInput = document.getElementById(product + '-number');
   let productNumber= productInput.value;
   if(increaseNumber){
       productNumber= parseInt(productInput.value) + 1;
   }
   else if(productNumber>0){
       productNumber= parseInt(productInput.value) - 1;
   }
   productInput.value = productNumber;
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   getInputValue()
}


function calcutateTotal(product){
   const phoductInput = document.getElementById(product + '-number')
   const productValue = parseInt(phoductInput.value);
   return productValue;
}
function getInputValue(){
   const phoneTotal = calcutateTotal('phone') * 1219;
    const caseTotal = calcutateTotal('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalAmount = subTotal + tax;
   document.getElementById('sub-total').innerText=subTotal;
   document.getElementById('tax-amount').innerText=tax;
   document.getElementById('total-amount').innerText=totalAmount;
}

// phone
document.getElementById('phone-plus').addEventListener('click',function(){
   updateproductnumber('phone',1219,true)
});
document.getElementById('phone-minus').addEventListener('click',function(){
   updateproductnumber('phone',1219,false)
});


// case

document.getElementById('case-plus').addEventListener('click',function(){
   updateproductnumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
   updateproductnumber('case',59,false)
})
