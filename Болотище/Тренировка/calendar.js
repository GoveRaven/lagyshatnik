const cal = document.getElementById("calendar");

function createCalendar(elem, year, month) {
  const calendar = document.createElement("table");
  const tableHead = createWeekDay();
  const date = new Date(year, month - 1);
  const tableBody = createWeek(date);

  calendar.append(tableHead);
  calendar.append(...tableBody);
  elem.append(calendar);
}

createCalendar(cal, 2015, 12);

function createWeekDay() {
  const week = document.createElement("tr");
  const dayName = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < 7; i++) {
    const day = document.createElement("th");
    day.textContent = dayName[i];
    week.append(day);
  }
  return week;
}

function createWeek(date) {
  const month = [];
  const monthNumber = date.getMonth();
  while (monthNumber === date.getMonth()) {
    const week = document.createElement("tr");
    for (let i = 1; i <= 7; i++) {
      let dayOfWeek = date.getDay();
      if (dayOfWeek === 0) dayOfWeek = 7;
      const numberOfDay = date.getDate();
      const day = document.createElement("td");
      if (i === dayOfWeek && monthNumber === date.getMonth()) {
        day.textContent = numberOfDay;
        date.setDate(numberOfDay + 1);
      }
      week.append(day);
      console.log(date.getMonth());
    }
    month.push(week);
  }
  return month;
}
