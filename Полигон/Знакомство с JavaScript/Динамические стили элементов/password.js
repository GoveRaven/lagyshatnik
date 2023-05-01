let password = document.querySelector(".password");
let showPassword = document.querySelector(".show-password");
let passwordLine = document.querySelector(".password-line");

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

password.oninput = function () {
    passLength = password.value.length
  passwordLine.style.width = passLength * 10 + "%";
  if (passLength <= 5) {
    passwordLine.style.backgroundColor = 'red'
  } else if (passLength > 5 && passLength < 10) {
    passwordLine.style.backgroundColor = 'gold'
  } else {
    passwordLine.style.backgroundColor = 'green'
  }
};
