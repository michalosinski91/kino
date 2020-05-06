const initialState = {
  showSearchBar: false,
  showTicketPurchaseForm: false,
  showFilter: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCHBAR":
      return { ...state, showSearchBar: !state.showSearchBar };
    case "TOGGLE_TICKETPURCHASEFORM":
      return {
        ...state,
        showTicketPurchaseForm: !state.showTicketPurchaseForm,
      };
    case "TOGGLE_FILTER":
      return {
        ...state,
        showFilter: !state.showFilter,
      };
    default:
      return state;
  }
};

export default reducer;
