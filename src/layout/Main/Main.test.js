import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";
import FilmData from "../../db/movies.json";
import CalendarData from "../../db/calendar.json";

afterEach(cleanup);

test("The Main section displays the correct component on change of path", () => {
  const history = createMemoryHistory();
  const mockTodayFilms = {
    day: 19,
    month: 5,
    year: 2020,
    date: "2020.5.19",
    timeSlots: [
      {
        time: "21:00",
        filmID: 20,
        film: {
          id: 20,
          title: "The Farewell",
          year: "2019",
          rated: "PG",
          release: "2019.08.09",
          duration: "100 min",
          genre: "Comedy, Drama",
          director: "Lulu Wang",
          writer: "Lulu Wang",
          actors: "Shuzhen Zhao, Awkwafina, X Mayo, Hong Lu",
          plot:
            "A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.",
          country: "USA",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
        },
        seatsAvailable: [
          49,
          37,
          84,
          9,
          17,
          75,
          52,
          3,
          51,
          31,
          14,
          35,
          50,
          51,
          87,
          62,
          1,
          18,
          6,
          62,
          42,
          4,
          0,
          81,
          0,
          31,
          4,
          83,
          29,
          36,
          19,
          16,
          88,
          54,
          56,
          84,
          70,
          74,
        ],
      },
    ],
  };
  const mockTomorrowFilms = {
    day: 19,
    month: 5,
    year: 2020,
    date: "2020.5.19",
    timeSlots: [
      {
        time: "21:00",
        filmID: 20,
        film: {
          id: 20,
          title: "The Farewell",
          year: "2019",
          rated: "PG",
          release: "2019.08.09",
          duration: "100 min",
          genre: "Comedy, Drama",
          director: "Lulu Wang",
          writer: "Lulu Wang",
          actors: "Shuzhen Zhao, Awkwafina, X Mayo, Hong Lu",
          plot:
            "A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.",
          country: "USA",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
        },
        seatsAvailable: [
          49,
          37,
          84,
          9,
          17,
          75,
          52,
          3,
          51,
          31,
          14,
          35,
          50,
          51,
          87,
          62,
          1,
          18,
          6,
          62,
          42,
          4,
          0,
          81,
          0,
          31,
          4,
          83,
          29,
          36,
          19,
          16,
          88,
          54,
          56,
          84,
          70,
          74,
        ],
      },
    ],
  };
  const { getByTestId } = render(
    <Router history={history}>
      <Main
        films={FilmData}
        calendar={CalendarData}
        todayFilms={mockTodayFilms}
        tomorrowFilms={mockTomorrowFilms}
      />
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
