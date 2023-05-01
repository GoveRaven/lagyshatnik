let theme = document.querySelector(".theme");
let header = document.querySelector("header");
let button = document.querySelector("button");
let body = document.querySelector("body");
let news = document.querySelector(".news-full");
let userComment = document.querySelector(".user-comment");
let footer = document.querySelector("footer");
let input = document.querySelector("input");
let button2 = document.querySelector(".comment-button");

theme.onclick = function () {
  header.classList.toggle("headerDark");
  body.classList.toggle("mainDark");
  news.classList.toggle("newsDark");
  heart.classList.toggle("heartDark");
  heart.classList.toggle("heartLight");
  likesNumber.classList.toggle("likesDark");
  userComment.classList.toggle("user-commentDark");
  commentForm.classList.toggle("comment-formDark");
  input.classList.toggle("inputDark");
  button.classList.toggle("buttonDark");
  button2.classList.toggle("buttonDark");
  footer.classList.toggle("footerDark");
};
