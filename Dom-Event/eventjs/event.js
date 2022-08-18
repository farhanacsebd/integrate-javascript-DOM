function makeRed(){
    document.body.style.backgroundColor='red';
}


// 2nd types onclick

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;
function makeBlue(){
 document.body.style.backgroundColor='blue';
}