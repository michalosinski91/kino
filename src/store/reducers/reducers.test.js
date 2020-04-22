import reducer from "./reducers";

test("should return the empty initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    showSearchBar: false,
    showTicketPurchaseForm: false,
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
