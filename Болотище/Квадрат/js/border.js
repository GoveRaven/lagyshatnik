let square = document.querySelector(".square");
let border = document.querySelector(".border");

function changeBorder(value) {
  square.style.borderRadius = `${value}%`;
  if (border.value === "") {
    square.style.borderRadius = "0%";
  }
}

border.addEventListener("keyup", () => {
  let num = border.value;
  changeBorder(num);
});
