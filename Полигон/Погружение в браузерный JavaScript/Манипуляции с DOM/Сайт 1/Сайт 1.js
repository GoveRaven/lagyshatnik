let list = document.querySelector(".todo-list");
let items = list.children;
let emptyListMessage = document.querySelector(".empty-tasks");
let newItemForm = document.querySelector(".add-form");
let newItemTitle = newItemForm.querySelector(".add-form-input");
let taskTemplate = document.querySelector("#task-template").content;
let newItemTemplate = taskTemplate.querySelector(".todo-list-item");

// Сообщение, когда все задачи выполнены
let toogleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  } else {
    emptyListMessage.classList.add("hidden");
  }
};

// Удаление задач
let addChecckHandler = function (item) {
  let checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function () {
    item.remove();
    toogleEmptyListMessage();
  });
};

for (let i = 0; i < items.length; i++) {
  addChecckHandler(items[i]);
}

// Добавление задач
newItemForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let taskText = newItemTitle.value;
  let task = newItemTemplate.cloneNode(true);
  addChecckHandler(task)
  let taskDescraption = task.querySelector("span");
  taskDescraption.textContent = taskText;
  list.appendChild(task);
  toogleEmptyListMessage()
  newItemTitle.value = ''
});
