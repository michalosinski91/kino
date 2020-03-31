import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";

afterEach(cleanup);

test("The Main section displays the correct component on change of path", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Main />
    </Router>
  );

  expect(getByTestId("main-container").firstChild).toBe(getByTestId("home"));
  history.push("/onas");
  expect(getByTestId("main-container").firstChild).toBe(getByTestId("aboutus"));
  history.push("/repertuar");
  expect(getByTestId("main-container").firstChild).toBe(getByTestId("films"));
  history.push("/kalendarz");
  expect(getByTestId("main-container").firstChild).toBe(
    getByTestId("calendar")
  );
  history.push("/bilety");
  expect(getByTestId("main-container").firstChild).toBe(
    getByTestId("boxoffice")
  );
  history.push("/");
  expect(getByTestId("main-container").firstChild).toBe(getByTestId("home"));
  history.push("/badroute");
  expect(getByTestId("main-container").firstChild).toBe(
    getByTestId("notfound")
  );
});
