function checkCoupon(currentDate, expirationDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currDataArr = currentDate.split(" ");
  const expirDataArr = expirationDate.split(" ");
  let currDataMonth = currDataArr[0];
  let expirDataMonth = expirDataArr[0];

  currDataMonth = months.indexOf(currDataMonth)
  expirDataMonth = months.indexOf(expirDataMonth)

  const currData = `${currDataArr[2]}-${currDataMonth}-${currDataArr[1]}`
  const expirData = `${expirDataArr[2]}-${expirDataMonth}-${expirDataArr[1]}`

  const data1 = new Date(currentDate)
  const data2 = new Date(expirationDate)

  console.log(data1)
  console.log(data2)

  if (currDataArr[2] <= expirDataArr[2]) {
    return true;
  }
  return false;
}

console.log(checkCoupon("November 8, 2013", "November 5, 2014"));
