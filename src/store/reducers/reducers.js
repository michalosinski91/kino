const initialState = {
  showSearchBar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCHBAR":
      return { ...state, showSearchBar: !state.showSearchBar };
    default:
      return state;
  }
};

export default reducer;
