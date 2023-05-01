let kidsBtn = document.querySelector(".people__kids-btn");
let kidsInfo = document.querySelector(".kids-btn-info");

console.log(kidsInfo);

kidsBtn.addEventListener("click", () => {
  if (kidsInfo.classList.contains("kids-btn-info-hide")) {
    showTip()
  } else {
    hideTip()
  }
});

function showTip() {
  kidsInfo.classList.remove("kids-btn-info-hide");
}

function hideTip() {
  kidsInfo.classList.add("kids-btn-info-hide");
}