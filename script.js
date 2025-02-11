function addComment() {
    let input = document.getElementById('comment-input');
    let commentList = document.getElementById('comment-list');

    if (input.value.trim() !== "") {
        let newComment = document.createElement('li');
        newComment.textContent = input.value;
        commentList.appendChild(newComment);
        input.value = "";
    }
}
