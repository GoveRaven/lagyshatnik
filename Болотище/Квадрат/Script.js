let square = document.querySelector(".square");
let color = document.querySelector(".color");
let border = document.querySelector(".border");
let inputPersent = document.querySelector("#persent");
let inputPixels = document.querySelector("#pixels");

function changeColor(value) {
  square.style.background = `${value}`;
}

color.addEventListener("keyup", () => {
  let setting = color.value;
  changeColor(setting);
});

function changeBorder(value) {
  square.style.borderRadius = `${value}%`;
}

border.addEventListener("keyup", () => {
  let num = border.value;
  changeBorder(num);
});
