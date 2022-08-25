 // add button event handler
 
 document.getElementById('name-field').addEventListener('click',function(){
            
    // get user comment
 
    const namePost = document.getElementById('name-post');
 
    // const userComment = namePost.value;
 

    // create comment paragraph
 
    const newComment = document.createElement('p');
 
    newComment.innerText =  namePost.value;
 
    // append the child
    
    const commentContainer = document.getElementById('comment-container');
    
    commentContainer.appendChild(newComment);


    // clean the value

    namePost.value = '';
    
})