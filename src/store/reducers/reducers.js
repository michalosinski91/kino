const initialState = {
  showSearchBar: false,
  showTicketPurchaseForm: false,
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
    default:
      return state;
  }
};

export default reducer;
