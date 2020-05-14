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
