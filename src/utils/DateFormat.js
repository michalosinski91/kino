const todayDate = new Date();
const currentDay = todayDate.getDate();
export const currentMonth = todayDate.getMonth();
export const currentYear = todayDate.getFullYear();

const tomorrowDate = getTomorrowDate(todayDate);
const tomorrowDay = tomorrowDate.getDate();
const tomorrowMonth = tomorrowDate.getMonth();
const tomorrowYear = tomorrowDate.getFullYear();

// gets the next day date object
function getTomorrowDate(today) {
  let tomorrow = today;
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
}

// checks the length of the date string
// if it is single characters, it adds 0 to the front to make it DD format
// else, it returns the string
export function formatDate(str) {
  return str.length > 1 ? str : "0" + str;
}

export function formatMonthYearToString(m, y) {
  let month = formatDate(m.toString());
  let year = y.toString();
  return `${month}.${year}`;
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
  let month = (1 + tomorrowMonth).toString();
  month = formatDate(month);
  let day = tomorrowDay.toString();
  day = formatDate(day);
  return `${day}.${month}`;
}

// returns current month & year in mm.yyyy format
export function getCurrentMonthYearString() {
  let month = (1 + currentMonth).toString();
  month = formatDate(month);
  let year = currentYear.toString();
  return `${month}.${year}`;
}

export function getCurrentDayNumber() {
  return currentDay;
}

export function getCurrentMonthNumber() {
  return currentMonth + 1;
}

export function getCurrentYearNumber() {
  return currentYear;
}

export function getTomorrowDayNumber() {
  return tomorrowDay;
}

export function getTomorrowMonthNumber() {
  return tomorrowMonth + 1;
}

export function getTomorrowYearNumber() {
  return tomorrowYear;
}
