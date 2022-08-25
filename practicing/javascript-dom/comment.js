document.getElementById('handle-button').addEventListener('click',function(){
    
    const commentBox= document.getElementById('comment-box');
   

   const createPost = document.createElement('p');
   
   createPost.innerText = commentBox.value;



   const commentContainer = document.getElementById('comment-Container');
   
   commentContainer.appendChild(createPost);
})