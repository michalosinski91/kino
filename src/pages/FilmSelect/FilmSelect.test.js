import React from "react";
import FilmSelect from "./FilmSelect";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("should display the FilmSelect component", () => {
  const { getByTestId } = render(<FilmSelect />);
  expect(getByTestId("film-select").firstChild).toBe(getByTestId("list"));
});
