import reducer from "./reducers";

test("should return the empty initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    showSearchBar: false
  });
});

test("should hide SearchBar if it is visible", () => {
  expect(
    reducer(
      { showSearchBar: true },
      {
        type: "TOGGLE_SEARCHBAR"
      }
    )
  ).toEqual({
    showSearchBar: false
  });
});

test("should show SearchBar if it is hidden", () => {
  expect(
    reducer(
      { showSearchBar: false },
      {
        type: "TOGGLE_SEARCHBAR"
      }
    )
  ).toEqual({
    showSearchBar: true
  });
});
