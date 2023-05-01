let expectedUsers = 1000;
let usersByDay = [
  812, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741,
  1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261,
  2805, 1201,
];
let totalUsers = 0;
let minUsers = expectedUsers - 200;
let badDays = [];

for (let i = 0; i <= usersByDay.length - 1; i++) {
  if (usersByDay[i] < minUsers) {
    badDays[i] = usersByDay[i];
  } else {
    badDays[i] = 0;
  }
  totalUsers += usersByDay[i];
}

let avarageUsers = Math.round(totalUsers / usersByDay.length);
console.log("Среднея посещяемость: " + avarageUsers);

if (avarageUsers > expectedUsers) {
  console.log("Посещаемость великолепна! Продолжай в том же духе!");
} else {
  console.log("Посещаемость так себе! Надо поднапрячься!");
}

for (currentIndex = 0; currentIndex <= usersByDay.length; currentIndex++) {
  let minValue = usersByDay[currentIndex];

  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (minValue > usersByDay[j]) {
      minValue = usersByDay[j];
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = minValue;
      usersByDay[j] = swap;
    }
  }
}

console.log("Отсортированный массив: " + usersByDay);

let median

if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
} else {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}

console.log('Медийная посещаемость: ' + median);

if (median / avarageUsers < 0.9) {
  console.log("Есть подозрения в подставках");
} else {
  console.log("Подозрений в подставках нет");
}

