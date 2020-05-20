import React from "react";
import SearchBar from "./SearchBar";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("clicking on the button triggers an event to hide the SearchBar", async () => {
  let mockShowSearchBar = true;
  const mockToggleSearchBar = jest.fn(() => {
    mockShowSearchBar = !mockShowSearchBar;
  });
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

test("the SearchBar should have class of search-bar when showSearchBar is false", () => {
  const { getByTestId } = render(<SearchBar showSeachBar={false} />);

  expect(
    getByTestId("search-bar-container").classList.contains("search-bar")
  ).toBe(true);
  expect(
    getByTestId("search-bar-container").classList.contains("search-bar--show")
  ).toBe(false);
});
