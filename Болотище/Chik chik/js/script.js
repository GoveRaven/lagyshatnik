const API_URL = "https://shorthaired-functional-hammer.glitch.me/api";

/*
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список дней работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ
*/

let addPreload = (elem) => {
  elem.classList.add("preload");
};

let removePreload = (elem) => {
  elem.classList.remove("preload");
};

let startSlider = () => {
  let sliderItems = document.querySelectorAll(".slider__item");
  let sliderList = document.querySelector(".slider__list");
  let btnNextSlide = document.querySelector(".slider__arrow_right");
  let btnPrevSlide = document.querySelector(".slider__arrow_left");

  let activeSlide = 1;
  let position = 0;

  let checkSlider = () => {
    if (
      (activeSlide + 2 === sliderItems.length &&
        document.documentElement.offsetWidth > 560) ||
      activeSlide === sliderItems.length
    ) {
      btnNextSlide.style.display = "none";
    } else {
      btnNextSlide.style.display = "";
    }

    if (activeSlide === 1) {
      btnPrevSlide.style.display = "none";
    } else {
      btnPrevSlide.style.display = "";
    }
  };

  checkSlider();

  let nextSlide = () => {
    sliderItems[activeSlide]?.classList.remove("slider__item_active");
    position = -sliderItems[0].clientWidth * activeSlide;

    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide += 1;
    sliderItems[activeSlide]?.classList.add("slider__item_active");
    checkSlider();
  };

  let prevSlide = () => {
    sliderItems[activeSlide]?.classList.remove("slider__item_active");
    position = -sliderItems[0].clientWidth * (activeSlide - 2);

    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide -= 1;
    sliderItems[activeSlide]?.classList.add("slider__item_active");
    checkSlider();
  };

  btnNextSlide.addEventListener("click", nextSlide);
  btnPrevSlide.addEventListener("click", prevSlide);

  window.addEventListener("resize", () => {
    if (
      activeSlide + 2 > sliderItems.length &&
      document.documentElement.offsetWidth > 560
    ) {
      activeSlide = sliderItems.length - 2;
      sliderItems[activeSlide]?.classList.add("slider__items_active");
    }

    position = -sliderItems[0].clientWidth * (activeSlide - 1);
    sliderList.style.transform = `translateX(${position}px)`;
    checkSlider();
  });
};

let initSlider = () => {
  let slider = document.querySelector(".slider");
  let sliderContainer = document.querySelector(".slider__container");

  sliderContainer.style.display = "none";
  addPreload(slider);

  window.addEventListener("load", () => {
    sliderContainer.style.display = "";
    removePreload(slider);
    startSlider();
  });
};

/*
let renderPrice = (data) => {

}

let initSevice = () => {
  let priceList = document.querySelector(".price__list");
  priceList.textContent = "";

  addPreload(priceList);

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      renderPrice(priceList, data)
    })
};

let init = () => {
  initSlider();
  initSevice();
};
*/

window.addEventListener("DOMContentLoaded", init);
