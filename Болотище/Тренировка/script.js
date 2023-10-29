const cats = document.querySelectorAll(".cat");
const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");

cats.forEach((cat) => {
  cat.draggable = true;
  cat.addEventListener("dragstart", drag);
})



function drag(event) {
  event.dataTransfer.setData('id', event.target.id)
  console.log(event.dataTransfer)
}

zone1.ondragover = zone2.ondragover = (event) => false
zone1.ondrop = zone2.ondrop = drop

function drop(event) {
  event.preventDefault()

  const movedEl = event.dataTransfer.getData('id')

  this.append(document.getElementById(movedEl))
}



// const list = document.getElementById("list");
// const lis = list.querySelectorAll(".list_item");

// lis.forEach((el) => (el.draggable = true));

// list.addEventListener("dragstart", (event) => {
//   event.target.classList.add("selected");
// });

// list.addEventListener("dragend", (event) => {
//   event.target.classList.remove("selected");
// });

// list.addEventListener("dragover", (event) => {
//   event.preventDefault();

//   const activedEl = list.querySelector(".selected");
//   const currentEl = event.target;
//   const isMoveable =
//     activedEl !== currentEl && currentEl.classList.contains("list_item");

//   if (!isMoveable) return;

//   const nextEl = getNextElement(event.clientY, currentEl);

//   if (
//     (nextEl && activedEl === nextEl.previousElementSibling) ||
//     activedEl === nextEl
//   ) {
//     return;
//   }

//   nextEl.before(activedEl);

//   // list.insertBefore(activedEl, nextEl)
// });

// function getNextElement(cursorPosition, currentEl) {
//   const currentElCoords = currentEl.getBoundingClientRect();
//   const currentElCenter = currentElCoords.y + currentElCoords.height / 2;
//   const nextEl =
//     cursorPosition < currentElCenter ? currentEl : currentEl.nextElementSibling;
//   return nextEl;
// }
