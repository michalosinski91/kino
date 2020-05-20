import {
  getTomorrowDayMonthString,
  getCurrentMonthYearString,
  getCurrentMonthNumber,
  getCurrentYearNumber,
  getTomorrowDayNumber,
  getTomorrowMonthNumber,
  getTomorrowYearNumber,
} from "./DateFormat";
const todayDate = new Date();
const currentDay = todayDate.getDate();
const currentMonth = todayDate.getMonth();
const currentYear = todayDate.getFullYear();
const tomorrowDate = getTomorrowDate(todayDate);
const tomorrowDay = tomorrowDate.getDate();
const tomorrowMonth = tomorrowDate.getMonth();
const tomorrowYear = tomorrowDate.getFullYear();

function getTomorrowDate(today) {
  let tomorrow = today;
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
}

export function formatDate(str) {
  return str.length > 1 ? str : "0" + str;
}

test("getTomorrowDayMonthString should return tomorrow date in string format", () => {
  const expectedDate = `${formatDate(tomorrowDay.toString())}.${formatDate(
    (tomorrowMonth + 1).toString()
  )}`;
  expect(getTomorrowDayMonthString()).toEqual(expectedDate);
});

test("getCurrentMonthYearString should return current date in string format", () => {
  const expectedDate = `${formatDate(
    (currentMonth + 1).toString()
  )}.${currentYear.toString()}`;
  expect(getCurrentMonthYearString()).toEqual(expectedDate);
});

test("getCurrentMonthNumber should return month's number, e.g. january = 1", () => {
  const expectedDate = currentMonth + 1;
  expect(getCurrentMonthNumber()).toEqual(expectedDate);
});

test("getCurrentYearNumber should return current year as a number", () => {
  const expectedDate = currentYear;
  expect(getCurrentYearNumber()).toEqual(expectedDate);
});

test("getTomorrowDayNumber should return number equivalent of day of the month", () => {
  const expectedDate = tomorrowDay;
  expect(getTomorrowDayNumber()).toEqual(expectedDate);
});

test("getTomorrowMonthNumber returns the correct month for tomorrow's day, in correct format - e.g. May = 5", () => {
  const expectedDate = tomorrowMonth + 1;
  expect(getTomorrowMonthNumber()).toEqual(expectedDate);
});

test("getTomorrowYearNumber returns the correct year for tomorrow's day", () => {
  const expectedDate = tomorrowYear;
  expect(getTomorrowYearNumber()).toEqual(expectedDate);
});
