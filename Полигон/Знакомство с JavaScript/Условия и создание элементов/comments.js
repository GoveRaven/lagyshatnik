let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.my-comment');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
};