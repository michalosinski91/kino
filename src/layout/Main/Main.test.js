import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";
import Home from "../../pages/Home/Home";
import Films from "../../pages/Films/Films";
import Calendar from "../../pages/Calendar/Calendar";
import BoxOffice from "../../pages/BoxOffice/BoxOffice";
import AboutUs from "../../pages/AboutUs/AboutUs";
import NotFound from "../../pages/NotFound/NotFound";

afterEach(cleanup);

test("The Main section displays the correct component on change of path", () => {
  const history = createMemoryHistory();
  const { container, getByTestId, debug } = render(
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
