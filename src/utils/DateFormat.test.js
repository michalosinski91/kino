import { getTodayDate } from "./DateFormat";

test("getTodayDate returns correct date", () => {
  expect(getTodayDate()).toBe("17.04");
});
