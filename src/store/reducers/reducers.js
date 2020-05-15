import movieData from "../../db/movies.json";
import calendarData from "../../db/calendar.json";

const initialState = {
  showSearchBar: false,
  showTicketPurchaseForm: false,
  showFilter: false,
  genres: [
    {
      name: "Akcja",
      filter: false,
    },
    {
      name: "Animacja",
      filter: false,
    },
    {
      name: "Dramat",
      filter: false,
    },
    {
      name: "Horror",
      filter: false,
    },
    {
      name: "Komedia",
      filter: false,
    },
    {
      name: "Rodzinny",
      filter: false,
    },
    {
      name: "Romans",
      filter: false,
    },
    {
      name: "Thriller",
      filter: false,
    },
  ],
  age: [
    {
      category: "Familijny",
      filter: false,
    },
    {
      category: "13+",
      filter: false,
    },
    {
      category: "17+",
      filter: false,
    },
  ],
  films: [],
  calendar: [],
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
    case "GET_MOVIES":
      return {
        ...state,
        films: movieData,
      };
    case "GET_CALENDAR":
      return {
        ...state,
        calendar: calendarData.filter(
          (calendarEntry) =>
            calendarEntry.month == action.payload.month &&
            calendarEntry.year == action.payload.year
        ),
      };
    default:
      return state;
  }
};

export default reducer;
