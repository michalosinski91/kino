const initialState = {
  showSearchBar: false,
  showTicketPurchaseForm: false,
  showFilter: false,
  genres: [
    {
      name: "Komedia",
      filter: false,
    },
    {
      name: "Dramat",
      filter: false,
    },
    {
      name: "Akcja",
      filter: false,
    },
    {
      name: "Thriller",
      filter: false,
    },
    {
      name: "Animacja",
      filter: false,
    },
    {
      name: "Romans",
      filter: false,
    },
    {
      name: "Horror",
      filter: false,
    },
  ],
  age: [
    {
      category: "Familijny",
      filter: false,
    },
    {
      category: "12+",
      filter: false,
    },
    {
      category: "15+",
      filter: false,
    },
    {
      category: "18+",
      filter: false,
    },
  ],
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
    case "TOGGLE_GENRE_FILTER":
      return {
        ...state,
        genres: state.genres.map((genre) => {
          if (genre.name == action.genre) {
            return {
              ...genre,
              filter: !genre.filter,
            };
          }
          return genre;
        }),
      };
    case "TOGGLE_AGE_FILTER":
      return {
        ...state,
        age: state.age.map((item) => {
          if (item.category == action.age) {
            return {
              ...item,
              filter: !item.filter,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
