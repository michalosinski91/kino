import React from "react";
import FilmDetail from "./FilmDetail";
import { Route, MemoryRouter } from "react-router-dom";
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
  waitFor,
  findByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const mockFilms = [
  {
    id: 1,
    title: "The Green Knight",
    year: "2020",
    rated: "N/A",
    release: "2020.05.29",
    duration: "125 min",
    genre: "Drama, Horror",
    director: "David Lowery",
    writer: "David Lowery",
    actors: "Dev Patel, Alicia Vikander, Joel Edgerton, Sarita Choudhury",
    plot:
      "A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight.",
    country: "USA, Ireland",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWE1ZGE5Y2QtYWE4Yi00YjM0LThhNWYtMWM1OGJjNDU3YzMyXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "Tenet",
    year: "2020",
    rated: "N/A",
    release: "2020.07.17",
    duration: "N/A",
    genre: "Action, Drama, Thriller",
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    actors:
      "Elizabeth Debicki, Robert Pattinson, Aaron Taylor-Johnson, Kenneth Branagh",
    plot:
      "An action epic revolving around international espionage, time travel, and evolution. Possibly about a man trying to prevent World War 3 through time travel and rebirth.",
    country: "USA, UK",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmMwYzFlNTEtYTc0NC00NGY4LTgzNzItZGFiYTViY2QzNzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
];

test("should render the film-info component", async () => {
  const { container, getByTestId } = render(
    <MemoryRouter initialEntries={[`/film/1`]}>
      <FilmDetail films={mockFilms} />
    </MemoryRouter>
  );
  waitForElementToBeRemoved(getByTestId("loading")).then(() => {
    waitFor(() =>
      expect(container.firstChild).toBe(getByTestId("film-container"))
    );
  });
});

test("should find a film from the film list based on ID retrieved from the list", async () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={[`/film/1`]}>
      <FilmDetail films={mockFilms} />
    </MemoryRouter>
  );
  waitForElementToBeRemoved(getByTestId("loading")).then(() => {
    waitFor(() =>
      expect(getByTestId("film-title").innerText).toBe("The Green Knight")
    );
  });
});
