import React from "react";
import ListItem from "./ListItem";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const mockData = {
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
};

const mockHandleDisplayPhotoChange = jest.fn();

test("should render a loading component when waiting for data", () => {
  const { getByTestId, container } = render(<ListItem />);
  expect(container.firstChild).toBe(getByTestId("loading"));
});

test("should render correct component when data provided", () => {
  const { getByTestId, container } = render(<ListItem data={mockData} />);
  expect(container.firstChild).toBe(getByTestId("list-item-container"));
});

test("should call handleDisplayPhotoChange on mouse enter", () => {
  const { getByTestId } = render(
    <ListItem
      data={mockData}
      handleDisplayPhotoChange={mockHandleDisplayPhotoChange}
    />
  );
  expect(mockHandleDisplayPhotoChange).toHaveBeenCalledTimes(0);
  fireEvent.mouseEnter(getByTestId("list-item-container"));
  expect(mockHandleDisplayPhotoChange).toHaveBeenCalledTimes(1);
});
