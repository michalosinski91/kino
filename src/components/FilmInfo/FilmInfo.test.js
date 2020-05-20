import React from "react";
import FilmInfo from "./FilmInfo";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const mockFilm = {
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
};

const mockFilmNoDuration = {
  id: 1,
  title: "The Green Knight",
  year: "2020",
  rated: "N/A",
  release: "2020.05.29",
  duration: "N/A",
  genre: "Drama, Horror",
  director: "David Lowery",
  writer: "David Lowery",
  actors: "Dev Patel, Alicia Vikander, Joel Edgerton, Sarita Choudhury",
  plot:
    "A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight.",
  country: "USA, Ireland",
  poster:
    "https://m.media-amazon.com/images/M/MV5BNWE1ZGE5Y2QtYWE4Yi00YjM0LThhNWYtMWM1OGJjNDU3YzMyXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
};

test("should render film-info component", () => {
  const { container, getByTestId } = render(<FilmInfo film={mockFilm} />);

  expect(container.firstChild).toBe(getByTestId("film-info"));
});

test("should render film duration if it is available", () => {
  const { getByTestId } = render(<FilmInfo film={mockFilm} />);

  expect(getByTestId("film-duration").innerHTML).toBe(
    "<strong>Długość: </strong>125 min"
  );
});

test("should render 'brak informacji' if duration info is not given", () => {
  const { getByTestId } = render(<FilmInfo film={mockFilmNoDuration} />);

  expect(getByTestId("film-duration").innerHTML).toBe(
    "<strong>Długość: </strong>Brak informacji"
  );
});
