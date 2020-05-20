import React from "react";
import DayTab from "./DayTab";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const mockOperation = jest.fn();
const mockHandleDaySelect = jest.fn((target, cb) => {
  cb();
});

test("should display component with the correct name for 'Dzisiaj'", () => {
  const { getByTestId } = render(<DayTab name="Dzisiaj" />);

  expect(getByTestId("day-tab").innerHTML).toBe("Dzisiaj");
});

test("should display with the correct name for 'Jutro'", () => {
  const { getByTestId } = render(<DayTab name="Jutro" />);

  expect(getByTestId("day-tab").innerHTML).toBe("Jutro");
});

test("should call a function when clicked", () => {
  const { getByTestId } = render(
    <DayTab
      name="Dzisiaj"
      operation={mockOperation}
      handleDaySelect={mockHandleDaySelect}
    />
  );

  const element = getByTestId("day-tab");
  expect(mockOperation).toHaveBeenCalledTimes(0);
  expect(mockHandleDaySelect).toHaveBeenCalledTimes(0);
  fireEvent.click(element);
  expect(mockOperation).toHaveBeenCalledTimes(1);
  expect(mockHandleDaySelect).toHaveBeenCalledTimes(1);
});
