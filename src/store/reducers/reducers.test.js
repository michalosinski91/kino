import reducer from "./reducers";

test("should return the empty initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    showSearchBar: false,
    showTicketPurchaseForm: false,
    showFilter: false,
    genres: [
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
    ],
    age: [
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
    ],
  });
});

test("should hide SearchBar if it is visible", () => {
  expect(
    reducer(
      { showSearchBar: true },
      {
        type: "TOGGLE_SEARCHBAR",
      }
    )
  ).toEqual({
    showSearchBar: false,
  });
});

test("should show SearchBar if it is hidden", () => {
  expect(
    reducer(
      { showSearchBar: false },
      {
        type: "TOGGLE_SEARCHBAR",
      }
    )
  ).toEqual({
    showSearchBar: true,
  });
});

test("should hide TicketPurchaseForm if it is visible", () => {
  expect(
    reducer(
      { showTicketPurchaseForm: true },
      {
        type: "TOGGLE_TICKETPURCHASEFORM",
      }
    )
  ).toEqual({
    showTicketPurchaseForm: false,
  });
});

test("should show TicketPurchaseForm if it is hidden", () => {
  expect(
    reducer(
      { showTicketPurchaseForm: false },
      {
        type: "TOGGLE_TICKETPURCHASEFORM",
      }
    )
  ).toEqual({
    showTicketPurchaseForm: true,
  });
});

test("should hide Filter if it is shown", () => {
  expect(reducer({ showFilter: true }, { type: "TOGGLE_FILTER" })).toEqual({
    showFilter: false,
  });
});

test("should show Filter if it is hidden", () => {
  expect(reducer({ showFilter: false }, { type: "TOGGLE_FILTER" })).toEqual({
    showFilter: true,
  });
});

test("should toggle genre.filter to true if it is false", () => {
  const mockGenre = "Komedia";
  expect(
    reducer(
      {
        genres: [
          { name: mockGenre, filter: false },
          { name: "Dramat", filter: false },
        ],
      },
      { type: "TOGGLE_GENRE_FILTER", genre: mockGenre }
    )
  ).toEqual({
    genres: [
      { name: mockGenre, filter: true },
      { name: "Dramat", filter: false },
    ],
  });
});

test("should toggle genre.filter to false if it is true", () => {
  const mockGenre = "Romans";
  expect(
    reducer(
      {
        genres: [
          { name: mockGenre, filter: true },
          { name: "Dramat", filter: true },
        ],
      },
      { type: "TOGGLE_GENRE_FILTER", genre: mockGenre }
    )
  ).toEqual({
    genres: [
      { name: mockGenre, filter: false },
      { name: "Dramat", filter: true },
    ],
  });
});

test("should toggle age.filter to true if it is false", () => {
  const mockAge = "12+";
  expect(
    reducer(
      {
        age: [
          { category: mockAge, filter: false },
          { category: "15+", filter: false },
        ],
      },
      { type: "TOGGLE_AGE_FILTER", age: mockAge }
    )
  ).toEqual({
    age: [
      { category: mockAge, filter: true },
      { category: "15+", filter: false },
    ],
  });
});

test("should toggle age.filter to false if it is true", () => {
  const mockAge = "15+";
  expect(
    reducer(
      {
        age: [
          { category: mockAge, filter: true },
          { category: "18+", filter: true },
        ],
      },
      { type: "TOGGLE_AGE_FILTER", age: mockAge }
    )
  ).toEqual({
    age: [
      { category: mockAge, filter: false },
      { category: "18+", filter: true },
    ],
  });
});
