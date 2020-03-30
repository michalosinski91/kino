import * as actions from "./actions";

test("should create an action to toggle 'show' class on SearchBar", () => {
  const expectedAction = {
    type: "TOGGLE_SEARCHBAR"
  };

  expect(actions.toggleSearchBar()).toEqual(expectedAction);
});
