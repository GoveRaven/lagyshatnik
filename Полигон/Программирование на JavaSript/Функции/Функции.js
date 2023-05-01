/* 
let calculateMiles = function (distance) {
  let percent = 0.25;
  if (distance > 10500) {
    percent = 0.35;
  }
  
  let miles = Math.round(distance * percent);
  console.log("За полёт получим: " + miles + " миль");
  return miles
}

calculateMiles(4125)
calculateMiles(11000) 
*/

let calculateMiles = function (distance, isBusinessClass) {
  let percent = 0.18;
  if (isBusinessClass) {
    percent += 0.04;
  }
  if (distance > 3500) {
    percent += 0.15;
  }
  return distance * percent;
};

/*
let milesEconom = calculateMiles(10000, false);
let milesBusiness = calculateMiles(10000, true);

console.log("Эконом классом Кексофлота накопишь " + milesEconom + " миль");
console.log("Бизнес-классом Кексофлота накопишь " + milesBusiness + " миль");
*/

let calculateFlights = function (distance, isBusinessClass, milesTarget) {
  let miles = calculateMiles(distance, isBusinessClass);
  let flights = Math.ceil(milesTarget / miles);
  return flights;
};

let target = [3000, 7500, 15000];

for (i = 0; i < target.length; i++) {
  let flightsVariantFirst = calculateFlights(3118, true, target[i]);
  let flightsVariantSecond = calculateFlights(3617, false, target[i]);

  console.log(
    "Необходимое количество полётов в бизнес-класс до Валенсии: " +
      flightsVariantFirst
  );
  console.log(
    "Необходимое колчество полётов в экономе до Лиссабона: " +
      flightsVariantSecond
  );

  if (flightsVariantFirst > flightsVariantSecond) {
    console.log(
      "Быстрей накопишь полётами в эконом до Лиссбаона! Количество полётов: " +
        flightsVariantSecond
    );
  } else {
    console.log(
      "Быстрей накопишь полётами в бизнес до Валенсии! Количество полётов: " +
        flightsVariantFirst
    );
  }
}
