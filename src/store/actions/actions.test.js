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

test("should fetch films from the DB", () => {
  const expectedAction = {
    type: "GET_MOVIES",
  };
  expect(actions.getMovies()).toEqual(expectedAction);
});

test("should fetch calendar schedule for a given month from the DB", () => {
  const month = "05";
  const year = "2020";
  const expectedAction = {
    type: "GET_CALENDAR",
    payload: {
      month,
      year,
    },
  };
  expect(actions.getCalendar(month, year)).toEqual(expectedAction);
});

test("should fetch films for today", () => {
  const day = 19;
  const month = 5;
  const year = 2020;
  const expectedAction = {
    type: "GET_TODAY_MOVIES",
    payload: {
      day,
      month,
      year,
    },
  };
  expect(actions.getTodayMovies(day, month, year)).toEqual(expectedAction);
});

test("should fetch films for tomorrow", () => {
  const day = 20;
  const month = 5;
  const year = 2020;
  const expectedAction = {
    type: "GET_TOMORROW_MOVIES",
    payload: {
      day,
      month,
      year,
    },
  };
  expect(actions.getTomorrowMovies(day, month, year)).toEqual(expectedAction);
});
