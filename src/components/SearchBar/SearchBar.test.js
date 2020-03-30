import React from "react";
import SearchBar from "./SearchBar";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockShowSearchBar = true;
const mockToggleSearchBar = jest.fn(() => {
  mockShowSearchBar = !mockShowSearchBar;
});

test("clicking on the button triggers an event to hide the SearchBar", async () => {
  const { getByTestId } = render(
    <SearchBar
      toggleSearchBar={mockToggleSearchBar}
      showSearchBar={mockShowSearchBar}
    />
  );
  expect(mockToggleSearchBar).toHaveBeenCalledTimes(0);
  const button = getByTestId("hideSearchBar");
  fireEvent.click(button);
  expect(mockToggleSearchBar).toHaveBeenCalledTimes(1);
  expect(mockShowSearchBar).toBe(false);
  fireEvent.click(button);
  expect(mockToggleSearchBar).toHaveBeenCalledTimes(2);
  expect(mockShowSearchBar).toBe(true);
});
