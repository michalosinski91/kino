export const toggleSearchBar = () => ({
  type: "TOGGLE_SEARCHBAR",
});

export const toggleTicketPurchaseForm = () => ({
  type: "TOGGLE_TICKETPURCHASEFORM",
});

export const toggleFilter = () => ({
  type: "TOGGLE_FILTER",
});

export const toggleGenreFilter = (genre) => ({
  type: "TOGGLE_GENRE_FILTER",
  genre,
});

export const toggleAgeFilter = (age) => ({
  type: "TOGGLE_AGE_FILTER",
  age,
});

export const getMovies = () => ({
  type: "GET_MOVIES",
});

export const getCalendar = (month, year) => ({
  type: "GET_CALENDAR",
  payload: {
    month,
    year,
  },
});

export const getTodayMovies = (day, month, year) => ({
  type: "GET_TODAY_MOVIES",
  payload: {
    day,
    month,
    year,
  },
});

export const getTomorrowMovies = (day, month, year) => ({
  type: "GET_TOMORROW_MOVIES",
  payload: {
    day,
    month,
    year,
  },
});
