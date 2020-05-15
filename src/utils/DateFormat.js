const todayDate = new Date();
const currentDay = todayDate.getDate();
const currentMonth = todayDate.getMonth();
const currentYear = todayDate.getFullYear();

const tomorrowDate = getTomorrowDate(todayDate);

// gets the next day date object
function getTomorrowDate(today) {
  let tomorrow = today;
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
}

// checks the length of the date string
// if it is single characters, it adds 0 to the front to make it DD format
// else, it returns the string
function formatDate(str) {
  return str.length > 1 ? str : "0" + str;
}

// returns current day & month in dd.mm format
export function getCurrentDayMonthString() {
  let month = (1 + currentMonth).toString();
  month = formatDate(month);
  let day = currentDay.toString();
  day = formatDate(day);

  return `${day}.${month}`;
}

// returns next day & month in dd.mm format
export function getTomorrowDayMonthString() {
  let month = (1 + tomorrowDate.getMonth()).toString();
  month = formatDate(month);
  let day = tomorrowDate.getDate().toString();
  day = formatDate(day);
  return `${day}.${month}`;
}

// returns current month & year in mm.yyyy format
export function getCurrentMonthYearString() {
  let month = (1 + currentMonth).toString();
  month = month.length > 1 ? month : "0" + month;
  let year = currentYear.toString();
  return `${month}.${year}`;
}

//
