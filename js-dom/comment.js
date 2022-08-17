 // 1. get button event handler
 document.getElementById("submit-comment").addEventListener('click',function(){
            
    // 2. get user comment
    const commentText = document.getElementById('comment-text');
    // const userComment=commentText.value;

    // 3.creat comment peragraph        
    const newComment = document.createElement('p');
    newComment.innerText = commentText.value;

    // 6.append the comment 

    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    // 5.comment box value 
    commentText.value ='';
})