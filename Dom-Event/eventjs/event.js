// 2nd types onclick

function makeRed(){
    document.body.style.backgroundColor='red';
}


// 3nd types onclick

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;
function makeBlue(){
 document.body.style.backgroundColor='blue';
}

// 4th types onclick

const makeGreen = document.getElementById('make-green');
makeGreen.onclick =  function (){
    document.body.style.backgroundColor='green';
    
}


// 5th types onclick

const makeGoldenRod = document.getElementById('make-goldenRod');
makeGoldenRod.addEventListener('click',makegoldenRod );

function makegoldenRod(){
    document.body.style.backgroundColor='goldenrod';
}


// 6th types onclick

const makeHotPink =document.getElementById('make-hotpink');
makeHotPink.addEventListener('click',function(){

  document.body.style.backgroundColor='hotpink'
  
})