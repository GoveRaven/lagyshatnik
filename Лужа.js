"use strict";
function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (day < 10) {
    day = '0' + day.toString()
  }
  if (month < 10) {
    month = '0' + month.toString()
  }
  return `${day}-${month}-${date.getFullYear()}`;
}

console.log(formatDate(new Date(2015, 10, 2)))