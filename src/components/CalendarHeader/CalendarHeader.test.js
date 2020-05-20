import React from "react";
import CalendarHeader from "./CalendarHeader";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockShowFilter = true;
const mockToggleFilter = jest.fn(() => {
  mockShowFilter = !mockShowFilter;
});

let count = 0;
const mockIncrement = jest.fn(() => {
  count++;
});

const mockDecrement = jest.fn(() => {
  count--;
});

test("clicking on the button triggers an event to hide/show the Filter container", async () => {
  const { getByTestId } = render(
    <CalendarHeader
      toggleFilter={mockToggleFilter}
      showFilter={mockShowFilter}
      increment={mockIncrement}
      decrement={mockDecrement}
    />
  );
  expect(mockToggleFilter).toHaveBeenCalledTimes(0);
  const button = getByTestId("toggleFilterBtn");
  fireEvent.click(button);
  expect(mockToggleFilter).toHaveBeenCalledTimes(1);
  expect(mockShowFilter).toBe(false);
  fireEvent.click(button);
  expect(mockToggleFilter).toHaveBeenCalledTimes(2);
  expect(mockShowFilter).toBe(true);
});

test("clicking on the arrows triggers increment/decrement of count", async () => {
  const { getByTestId } = render(
    <CalendarHeader
      toggleFilter={mockToggleFilter}
      showFilter={mockShowFilter}
      increment={mockIncrement}
      decrement={mockDecrement}
    />
  );
  expect(mockIncrement).toHaveBeenCalledTimes(0);
  expect(mockDecrement).toHaveBeenCalledTimes(0);
  const arrowLeft = getByTestId("arrowLeft");
  const arrowRight = getByTestId("arrowRight");
  fireEvent.click(arrowRight);
  expect(mockIncrement).toHaveBeenCalledTimes(1);
  expect(mockDecrement).toHaveBeenCalledTimes(0);
  expect(count).toBe(1);
  fireEvent.click(arrowRight);
  expect(mockIncrement).toHaveBeenCalledTimes(2);
  expect(mockDecrement).toHaveBeenCalledTimes(0);
  expect(count).toBe(2);
  fireEvent.click(arrowLeft);
  expect(mockIncrement).toHaveBeenCalledTimes(2);
  expect(mockDecrement).toHaveBeenCalledTimes(1);
  expect(count).toBe(1);
});
