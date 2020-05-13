import * as actions from "./actions";

test("should create an action to toggle 'show' class on SearchBar", () => {
  const expectedAction = {
    type: "TOGGLE_SEARCHBAR",
  };
  expect(actions.toggleSearchBar()).toEqual(expectedAction);
});

test("should create an action to toggle 'show' class on TicketPurchaseForm", () => {
  const expectedAction = {
    type: "TOGGLE_TICKETPURCHASEFORM",
  };
  expect(actions.toggleTicketPurchaseForm()).toEqual(expectedAction);
});

test("should create an action to toggle 'show' class on Filter", () => {
  const expectedAction = {
    type: "TOGGLE_FILTER",
  };
  expect(actions.toggleFilter()).toEqual(expectedAction);
});

test("should create an action to toggle a genre filter", () => {
  const genre = "Komedia";
  const expectedAction = {
    type: "TOGGLE_GENRE_FILTER",
    genre,
  };
  expect(actions.toggleGenreFilter(genre)).toEqual(expectedAction);
});

test("should create an action to toggle a age filter", () => {
  const age = "Familijny";
  const expectedAction = {
    type: "TOGGLE_AGE_FILTER",
    age,
  };
  expect(actions.toggleAgeFilter(age)).toEqual(expectedAction);
});
