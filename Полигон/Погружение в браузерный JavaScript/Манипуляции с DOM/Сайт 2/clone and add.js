// Контейнер для карточек
let pool = document.querySelector(".pool");

// Получаем шаблон карточки
let template = document.querySelector("#element-template").content;
let element = template.querySelector("div");

// Клонируем элемент

for (let i = 3; i < 11; i++) {
  let clonedElement = element.cloneNode(true);
  clonedElement.children[0].textContent = i;
  pool.appendChild(clonedElement);
}

/*
// Добавляем текстовое содержание в span
element.children[0].textContent = 86;

// Добавляет элемент в конец блока pool
pool.appendChild(element);

let newElement = document.createElement('div')
newElement.classList.add('el')
newElement.classList.add('el-green')

pool.appendChild(newElement)
pool.appendChild(element)
*/
