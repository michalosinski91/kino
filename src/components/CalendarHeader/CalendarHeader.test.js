import React from "react";
import CalendarHeader from "./CalendarHeader";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockShowFilter = true;
const mockToggleFilter = jest.fn(() => {
  mockShowFilter = !mockShowFilter;
});

test("clicking on the button triggers an event to hide/show the Filter container", async () => {
  const { getByTestId } = render(
    <CalendarHeader
      toggleFilter={mockToggleFilter}
      showFilter={mockShowFilter}
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
