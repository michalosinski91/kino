import React from "react";
import Filter from "./Filter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
let mockShowFilterTrue = true;
let mockShowFilterfalse = false;

test("Filter component has modifier '--show' when showFilter is true", async () => {
  const { getByTestId } = render(<Filter showFilter={mockShowFilterTrue} />);

  const filterComponent = getByTestId("filterComponent");
  expect(filterComponent.classList.contains("filter--show")).toBe(true);
});

test("Filter component to not have '--show' modifier when showFilter is false", async () => {
  const { getByTestId } = render(<Filter showFilter={mockShowFilterfalse} />);

  const filterComponent = getByTestId("filterComponent");
  expect(filterComponent.classList.contains("filter--show")).toBe(false);
});
