let origin = document.querySelector(".photo-origin");
let separator = document.querySelector(".separator");

//separator.addEventListener("mousedown", (e) => {
//  origin.style.width = e.offsetY;
//  separator.style.width = e.offsetY;
//});

//separator.addEventListener("mousemove", (e) => {
//  origin.style.width = e.offsetY;
//  separator.style.width = e.offsetY;
//});

if (origin && separator) {
  origin.style.width = "50%";
  separator.style.left = "50%";
}

let controls = document.querySelectorAll(".toggle-controls button");
let photo = document.querySelector(".photo");

for (let i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
  clickControl(controls[i]);
}

function toogleFilter(control) {
  for (let j = 0; j < controls.length; j++) {
    controls[j].classList.remove("active");
    photo.classList.remove(controls[j].dataset.filter);
  }

  control.classList.add("active");

  if (photo) {
    photo.classList.add(control.dataset.filter);
  }
}

function clickControl(control) {
  control.addEventListener("click", function () {
    toogleFilter(control);
  });
}

let defaultFilter = document.querySelector("button.oldie");
toogleFilter(defaultFilter);
