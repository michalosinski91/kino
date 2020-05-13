import React from "react";
import FilterBtn from "./FilterBtn";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockItemTrue = {
  name: "Test",
  filter: true,
};
let mockItemFalse = {
  name: "Test",
  filter: false,
};
const mockToggleFunction = jest.fn(() => {
  mockItem.filter = !mockItem.filter;
});

test("FilterBtn should not have '--checked' class modifier when filter is set to false", async () => {
  const { getByTestId } = render(
    <FilterBtn
      toggleFunction={mockToggleFunction}
      name={mockItemFalse.name}
      filter={mockItemFalse.filter}
    />
  );

  const btn = getByTestId("filterBtn");
  expect(btn.classList.contains("filter-btn--checked")).toBe(false);
});

test("FilterBtn should have '--checked' class modifier when filter is set to true", async () => {
  const { getByTestId } = render(
    <FilterBtn
      toggleFunction={mockToggleFunction}
      name={mockItemTrue.name}
      filter={mockItemTrue.filter}
    />
  );
  const btn = getByTestId("filterBtn");
  expect(btn.classList.contains("filter-btn--checked")).toBe(true);
});
