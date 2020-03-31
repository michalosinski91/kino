import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavList from "./NavList";

afterEach(cleanup);

test("Clicking on navigation list items changes the location", () => {
  const history = createMemoryHistory();
  const { getByText, debug } = render(
    <Router history={history}>
      <NavList />
    </Router>
  );
  const films = getByText("Repertuar");
  const calendar = getByText("Kalendarz");
  const boxoffice = getByText("Bilety");
  const aboutus = getByText("O Nas");
  expect(history.location.pathname).toBe("/");
  fireEvent.click(films);
  expect(history.location.pathname).toBe("/repertuar");
  fireEvent.click(calendar);
  expect(history.location.pathname).toBe("/kalendarz");
  fireEvent.click(boxoffice);
  expect(history.location.pathname).toBe("/bilety");
  fireEvent.click(aboutus);
  expect(history.location.pathname).toBe("/onas");
});
