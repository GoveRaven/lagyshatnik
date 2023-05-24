let square = document.querySelector(".square");
let color = document.querySelector(".color");


function changeColor(value) {
  square.style.background = `${value}`;
}

color.addEventListener("keyup", () => {
  let setting = color.value;
  changeColor(setting);
});
