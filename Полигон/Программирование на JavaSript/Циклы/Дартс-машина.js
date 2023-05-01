let score = 0;
let total = 0;
let victoryPoints = 100;
let misses = 0;

while (total < victoryPoints) {
  if (misses >= 3) {
    break;
  }
  score = Math.floor(Math.random() * 21 - 1);
  if (score < 0) {
    misses++;
    console.log("Промах!");
  } else {
    total += score;
    console.log("Результат броска: " + score);
  }
}

if (total < 100) {
  console.log("Счёт: " + total + ". Вы проиграли :(");
} else {
  console.log("Счёт: " + total + ". Вы победили! :)");
}
