import reducer from "./reducers";

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      showSearchBar: false
    });
  });

  it("should hide SearchBar if it is visible", () => {
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

  it("should show SearchBar if it is hidden", () => {
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
});
