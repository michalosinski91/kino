import { getTodayDate } from "./DateFormat";

test("getTodayDate returns correct date", () => {
  expect(getTodayDate()).toBe("01.04");
});
