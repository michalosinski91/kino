import React from "react";
import CurrentFilms from "./CurrentFilms";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("should render a loading component when waiting for film data", async () => {
  const { getByTestId } = render(<CurrentFilms />);
  expect(getByTestId("current-film-loader").firstChild).toBe(
    getByTestId("loading")
  );
});
