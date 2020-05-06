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
