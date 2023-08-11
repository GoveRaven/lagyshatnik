const button = document.querySelector("#sumbit-button");
const wrapper = document.querySelector("#message-wrapper");
const error = document.querySelector("#message-error");
const succes = document.querySelector("#message-succes");
const closeButtons = document.querySelectorAll(".close-button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  const nameField = document.querySelector("#name");
  const emailField = document.querySelector("#email");
  const messageField = document.querySelector("#message");
  if (!nameField.value || !emailField.value || !messageField.value) {
    wrapper.classList.remove('hide')
    error.classList.remove('hide')
  } else {
    wrapper.classList.remove('hide')
    succes.classList.remove('hide')
  }
});

closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        wrapper.classList.add('hide')
        error.classList.add('hide')
        succes.classList.add('hide')
    })
})