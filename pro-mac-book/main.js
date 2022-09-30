const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');
const button4 = document.getElementById('fourth');
const button5 = document.getElementById('fifth');
const button6 = document.getElementById('sixth');
const button7 = document.getElementById('seventh');                
const mainCost = document.getElementById('mainCost');                
const memoryCost = document.getElementById('memoryCost');
const storageCost = document.getElementById('storageCost');
const delivaryCost = document.getElementById('delivaryCost');
const total = document.getElementById('total');
const finalCost = document.getElementById('finalCost');
const promoField = document.getElementById('promoField');
let totalCost;

function updateTable(){
 const  mainPrice = parseInt(mainCost.innerText);
 const memory = parseInt(memoryCost.innerText);
 const storage = parseInt(storageCost.innerText);
 const delivary = parseInt(delivaryCost.innerText);
     
 
 totalCost =  mainPrice + memory + storage + delivary;
 
 
 total.innerText = totalCost;
 finalCost.innerText = totalCost;
}


function apply(){
    updateTable()
    let promo = promoField.value;
    if(promo == 'happy'){
        totalCost = totalCost * 0.8;
        finalCost.innerText =  totalCost;
    }                                                       
}

button1.addEventListener('click',function(){
    memoryCost.innerText = "0";
    updateTable()                 
});


button2.addEventListener('click',function(){
    memoryCost.innerText = "180";
    updateTable()
});


button3.addEventListener('click',function(){
    storageCost.innerText = "0";
    updateTable()
});

button4.addEventListener('click',function(){
    storageCost.innerText = "100";
    updateTable()
});

button5.addEventListener('click',function(){
    storageCost.innerText = "180";
    updateTable()
});

button6.addEventListener('click',function(){
    delivaryCost.innerText = "0";
    updateTable()
});

button7.addEventListener('click',function(){
    delivaryCost.innerText = "20";
    updateTable()
});