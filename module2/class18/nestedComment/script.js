let commentContainer = document.querySelector(".comment-container");

commentContainer.addEventListener("click",function(e){
    // console.log(e.target);
    let closestCard = e.target.closest(".comment-container");

    if(e.target.classList.contains("reply")){
        // <div class="comment-reply-container">
            // <input type="text" placeholder="Write your comment">
            // <button class="btn-submit">Submit</button>
        // </div> 
        let addNewCommentDiv = document.createElement("div");
        addNewCommentDiv.setAttribute("class","comment-reply-container");
        addNewCommentDiv.innerHTML = `<input type="text" placeholder="Write your comment">
        <button class="btn-submit">Submit</button>`;
        console.log(addNewCommentDiv);
        closestCard.appendChild(addNewCommentDiv);
    }
    else if(e.target.classList.contains("btn-submit")){
        let closestCommentReply = e.target.closest(".comment-reply-container");
        // console.log(closestCommentReply);
        let value = closestCommentReply.children[0].value;


        // <div class="comment-container">
        //     <div class="comment-card">
        //         <h3>Good Evening Everyone, How are you?</h3>
        //         <div class="reply">Reply</div>
        //     </div>
        // </div>
        let newComment = document.createElement("div");
        newComment.setAttribute("class","comment-container");
        newComment.innerHTML = `<div class="comment-card">
        <h3>${value}</h3>
        <div class="reply">Reply</div>
        </div>`;
        closestCard.appendChild(newComment);
        closestCommentReply.remove();
    }
})