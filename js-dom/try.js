const blogs= document.getElementsByTagName('p');
console.log(blogs);

for(tag of blogs){
    // console.log(tag);
    tag.style.backgroundColor ='blue';
    tag.style.color ='white';
}