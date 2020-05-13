import React from "react";
import Filter from "./Filter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockShowFilterTrue = true;
let mockShowFilterFlase = false;
const mockToggleGenreFilter = jest.fn((name) => {
  mockGenreList = mockGenreList.map((genre) => {
    if (genre.name == name) {
      return {
        ...genre,
        filter: !genre.filter,
      };
    }
    return genre;
  });
});
const mockToggleAgeFilter = jest.fn((category) => {
  mockAgeList = mockAgeList.map((age) => {
    if (age.category == category) {
      return {
        ...age,
        filter: !age.filter,
      };
    }
    return age;
  });
});
let mockAgeList = [
  {
    category: "Familijny",
    filter: false,
  },
  {
    category: "12+",
    filter: false,
  },
  {
    category: "15+",
    filter: false,
  },
  {
    category: "18+",
    filter: false,
  },
];
let mockGenreList = [
  {
    name: "Komedia",
    filter: false,
  },
  {
    name: "Dramat",
    filter: false,
  },
  {
    name: "Akcja",
    filter: false,
  },
  {
    name: "Thriller",
    filter: false,
  },
  {
    name: "Animacja",
    filter: false,
  },
  {
    name: "Romans",
    filter: false,
  },
  {
    name: "Horror",
    filter: false,
  },
];

test("Filter component has modifier '--show' when showFilter is true", async () => {
  const { getByTestId } = render(
    <Filter
      showFilter={mockShowFilterTrue}
      ageList={mockAgeList}
      genreList={mockGenreList}
    />
  );

  const filterComponent = getByTestId("filterComponent");
  expect(filterComponent.classList.contains("filter--show")).toBe(true);
});

test("Filter component to not have '--show' modifier when showFilter is false", async () => {
  const { getByTestId } = render(
    <Filter
      showFilter={mockShowFilterFlase}
      ageList={mockAgeList}
      genreList={mockGenreList}
    />
  );

  const filterComponent = getByTestId("filterComponent");
  expect(filterComponent.classList.contains("filter--show")).toBe(false);
});

test("Clicking on the genre button should toggle the filter property of the item in the genreList array with the same name", async () => {
  const { getByText } = render(
    <Filter
      showFilter={mockShowFilterFlase}
      genreList={mockGenreList}
      toggleGenreFilter={mockToggleGenreFilter}
    />
  );
  let selectedGenre = "Komedia";
  const genreButton = getByText(selectedGenre);
  expect(
    mockGenreList.filter((genre) => genre.name == selectedGenre)[0].filter
  ).toBe(false);
  expect(mockToggleGenreFilter).toHaveBeenCalledTimes(0);
  fireEvent.click(genreButton);
  expect(mockToggleGenreFilter).toHaveBeenCalledTimes(1);
  expect(
    mockGenreList.filter((genre) => genre.name == selectedGenre)[0].filter
  ).toBe(true);
  fireEvent.click(genreButton);
  expect(mockToggleGenreFilter).toHaveBeenCalledTimes(2);
  expect(
    mockGenreList.filter((genre) => genre.name == selectedGenre)[0].filter
  ).toBe(false);
});

test("Clicking on the genre button should toggle the filter property of the item in the genreList array with the same name", async () => {
  const { getByText } = render(
    <Filter
      showFilter={mockShowFilterFlase}
      ageList={mockAgeList}
      toggleAgeFilter={mockToggleAgeFilter}
    />
  );
  let selectedAge = "15+";
  const ageButton = getByText(selectedAge);
  expect(
    mockAgeList.filter((age) => age.category == selectedAge)[0].filter
  ).toBe(false);
  expect(mockToggleAgeFilter).toHaveBeenCalledTimes(0);
  fireEvent.click(ageButton);
  expect(mockToggleAgeFilter).toHaveBeenCalledTimes(1);
  expect(
    mockAgeList.filter((age) => age.category == selectedAge)[0].filter
  ).toBe(true);
  fireEvent.click(ageButton);
  expect(mockToggleAgeFilter).toHaveBeenCalledTimes(2);
  expect(
    mockAgeList.filter((age) => age.category == selectedAge)[0].filter
  ).toBe(false);
});
