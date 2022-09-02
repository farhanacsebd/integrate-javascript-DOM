function calcutateTotal(){
    
}

function updateproductnumber(product,price,increaseNumber){
    const productInput = document.getElementById(product+'-number');
    let productNumber =productInput.value;
    if(increaseNumber){
        productNumber = parseInt(productInput.value) +1;
    }
    else if(productNumber>0){
      productNumber = parseInt(productInput.value) -1;
    }
    productInput.value =productNumber;

    const totalNumber = document.getElementById(product+'-total');
    totalNumber.innerText = productNumber * price;
    
    
}


document.getElementById('phone-plus').addEventListener('click',function(){
    
    updateproductnumber('phone',1219,true)
});     
document.getElementById('phone-minus').addEventListener('click',function(){
    
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value) -1;
    phoneInput.value =phoneNumber; */
    updateproductnumber('phone',1219,false)

});     
document.getElementById('case-plus').addEventListener('click',function(){
    
    updateproductnumber('case',59,true)
});     
document.getElementById('case-minus').addEventListener('click',function(){
    
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value) -1;
    phoneInput.value =phoneNumber; */
    updateproductnumber('case',59,false)

});     