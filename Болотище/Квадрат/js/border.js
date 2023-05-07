let borderRadius = document.querySelector(".borderRadius");
let borderColor = document.querySelector(".borderColor");
let borderWidth = document.querySelector(".borderWidth");
let borderStyle = document.querySelector(".border-style");

function changeBorderRaduis(value) {
  square.style.borderRadius = `${value}%`;
  if (borderRadius.value === "") {
    square.style.borderRadius = "0%";
  }
}

borderRadius.addEventListener("input", () => {
  let num = borderRadius.value;
  changeBorderRaduis(num);
});

function changeBorderColor(color) {
  square.style.borderColor = color
}

borderColor.addEventListener('keyup', () => {
  let value = borderColor.value
  changeBorderColor(value)
})

function changeBorderWidth(value) {
  square.style.borderWidth = `${value}px`
  if (value === '') {
    square.style.borderWidth = `1px`
  }
}

borderWidth.addEventListener('input', () => {
  let value = borderWidth.value
  changeBorderWidth(value)
})

function changeBorderStyle(style) {
  square.style.borderStyle = style
}

borderStyle.addEventListener('change', () => {
  let style = borderStyle.value
  changeBorderStyle(style)
})