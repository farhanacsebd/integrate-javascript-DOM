# integrate-javascript-DOM

#### Those function donot have perametter that is call Anonynous function.
#### banking login html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baap er Bank</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
   <header>
    <h1 class="text-5xl text-center mt-16">Welcome to <span class="font-semibold text-indigo-700">Baap er Bank!!!</span></h1> 
   </header>
    <section class="bg-sky-100 w-3/4 mx-auto mt-8 p-10">
        <main>
            <h3 class="font-medium text-2xl mb-4">Please Login</h3>
            <div>
                <input id="user-email" class="block border border-gray-400 rounded w-3/4 mb-4 px-2 py-1" type="text" placeholder="your email">
                <input id="user-password" class="block border border-gray-400 rounded w-3/4 mb-4 px-2 py-1" type="password" placeholder="password">
                <button id="login-submit" class="bg-amber-500 px-4 py-2 font-medium text-slate-50 rounded">Submit</button>
            </div>
        </main>
    </section>
    <!-- <script src="js/bank.js"></script> -->
    <script src="js/banking js/login.js"></script>
</body>
</html>  
```
#### banking login js
```javascript
document.getElementById('login-submit').addEventListener('click',function(){
     // get user email
    const inputField = document.getElementById('user-email');
    const inputUser = inputField.value;

     // get user password
     
    const passField = document.getElementById('user-password');
    const passUser = passField.value;


     // checking email or password
     
    if((inputUser == 'farhana') && (passUser =='123')){
        window.location.href='banking.html'
    }
    else if((inputUser == 'farhana') && passUser != '123'){
        passField.value = '';
        alert('Rong Password')
    }
    else{
        inputField.value = '';
        passField.value = '';
        alert('try again')
    }

})
```
#### bank html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banking Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    
    <header>
        <h1 class="text-5xl text-center mt-8">Let's get some <span class="font-semibold text-indigo-700">Money!!!</span></h1> 
    </header>
    <main class="w-3/4 mx-auto">
        <!-- balance and transection -->
        <section class="mt-12 mb-8">
            <div class="grid grid-cols-3 gap-4 text-white">
                <div class="bg-blue-300 p-8 rounded">
                    <h3 class="text-2xl">Deposite</h3>
                    <h2 class="text-4xl">$<span id="deposite-total">00</span></h2>
                </div>
                <div class="bg-yellow-300 p-8 rounded">
                    <h3 class="text-2xl">Withdraw</h3>
                    <h2 class="text-4xl">$<span id="withdraw-total">00</span></h2>
                </div>
                <div class="bg-rose-300 p-8 rounded">
                    <h3 class="text-2xl">Balance</h3>
                    <h2 class="text-4xl">$<span id="balance-total">1240</span></h2>
                </div>
            </div>
        </section>
        <!-- deposite and withdraw -->
        <section>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-teal-200 p-8 rounded">
                    <h3 class="font-medium text-2xl mb-4">Please Deposite</h3>
                    <input id="deposite-input" class="block border border-gray-400 rounded w-3/4 mb-4 px-2 py-1" type="text" placeholder="$ amount you want to deposite">
                    <button id="deposite-button" class="bg-rose-600 px-4 py-2 font-medium text-slate-50 rounded">Deposite</button>
                </div>
                <div class="bg-fuchsia-200 p-8 rounded">
                    <h3 class="font-medium text-2xl mb-4">Please Withdraw</h3>
                    <input id="withdraw-input" class="block border border-gray-400 rounded w-3/4 mb-4 px-2 py-1" type="text" placeholder="$ amount you want to deposite">
                    <button id="withdraw-button" class="bg-rose-600 px-4 py-2 font-medium text-slate-50 rounded">Withdraw</button>
                </div>
            </div>
        </section>
    </main>
    <!-- <script src="js/banking.js"></script> -->
    <!-- <script src="js/bank-javascript.js"></script> -->
    <script src="js/banking js/newcode.js"></script>
</body>
</html>
```
### Function:
#### bank js
```javascript
function updateInputField(product){
    const dipositeInput = document.getElementById(product);
    const dipositeText = dipositeInput.value;
    const dipositeNewAmount = parseFloat(dipositeText);
    // clear input field 

    dipositeInput.value = ''; 
    
    return dipositeNewAmount;
}

function getUpdateField(fieldTotal,newAmount){
    const dipositeField = document.getElementById(fieldTotal);
    const previousDiposite = dipositeField.innerText;
    const previousDipositeAmount = parseFloat(previousDiposite);
    const totalDipositeAmount = newAmount + previousDipositeAmount;
    dipositeField.innerText = totalDipositeAmount;
}

function updateBalance(){
    const balanceField = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceField.innerText);
    return balanceAmount;
}
function updateBalanceTotal(isOdd,newAmount){
  // updated balance
    const balanceField = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceField.innerText);
    if(isOdd){
        balanceField.innerText = balanceAmount + newAmount;
    }
    else{
        balanceField.innerText = balanceAmount - newAmount;
    }
    
}

document.getElementById('deposite-button').addEventListener('click',function(){
   const dipositeNewAmount = updateInputField('deposite-input')

  if(dipositeNewAmount>0){
    getUpdateField('deposite-total',dipositeNewAmount)

    updateBalanceTotal(true,dipositeNewAmount)
  }

});

document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawNewAmount = updateInputField('withdraw-input');
    const balanceAmount = updateBalance();

   if(withdrawNewAmount>0 && withdrawNewAmount < balanceAmount){
    getUpdateField('withdraw-total',withdrawNewAmount)


    updateBalanceTotal(false,withdrawNewAmount)
   }
})

```
### shopping cart
#### only js code added
```javascript
function getThePhoneIncrease(product,price,increase){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(increase){
        productNumber = parseInt(productInput.value)+1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productInput.value)-1;  
    }
    productInput.value =productNumber;
    const productTotal = document.getElementById(product + '-total');
    // const caseTotalPrice = parseInt(caseTotal.innerText);
    const productPrice = productNumber * price;
    productTotal.innerText = productPrice;
    getInputValue()
}


function getCalculationTotal(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
} 

function getInputValue(){
    const caseTotal = getCalculationTotal('case')*59;
    const phoneTotal = getCalculationTotal('phone')*1219;
    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}


document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value)+1;
    // caseInput.value =caseNumber;
    getThePhoneIncrease('case',59,true) 
});
document.getElementById('case-minus').addEventListener('click',function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber; */
    getThePhoneIncrease('case',59,false) 
});
document.getElementById('phone-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value)+1;
    // caseInput.value =caseNumber;
    getThePhoneIncrease('phone',1219,true) 
});
document.getElementById('phone-minus').addEventListener('click',function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value)-1;
    caseInput.value =caseNumber; */
    getThePhoneIncrease('phone',1219,false) 
})
```
