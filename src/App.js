import React, { useEffect } from "react";

import {
  getCurrentMonthNumber,
  getCurrentYearNumber,
} from "./utils/DateFormat";

import Navbar from "./layout/Navbar/Navbar";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

//Redux
import { connect } from "react-redux";
import {
  toggleSearchBar,
  toggleTicketPurchaseForm,
  toggleFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  getMovies,
  getCalendar,
} from "./store/actions/actions";

// named export of App component for testing purposes.
// the default export is the connect component, which, if imported in the test file
// would return the wrapper component, and not the App component itself
export const App = ({
  showSearchBar,
  toggleSearchBar,
  showTicketPurchaseForm,
  toggleTicketPurchaseForm,
  toggleFilter,
  showFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  ageList,
  genreList,
  getMovies,
  films,
  getCalendar,
  calendar,
}) => {
  // on page load, fetch a list of films and from the DB
  useEffect(() => {
    getMovies();
    getCalendar(getCurrentMonthNumber(), getCurrentYearNumber());
  }, []);

  return (
    <div className="container">
      <SearchBar
        showSearchBar={showSearchBar}
        toggleSearchBar={toggleSearchBar}
      />
      <Navbar toggleSearchBar={toggleSearchBar} />
      <Main
        showTicketPurchaseForm={showTicketPurchaseForm}
        toggleTicketPurchaseForm={toggleTicketPurchaseForm}
        showFilter={showFilter}
        toggleFilter={toggleFilter}
        toggleGenreFilter={toggleGenreFilter}
        toggleAgeFilter={toggleAgeFilter}
        ageList={ageList}
        genreList={genreList}
        films={films}
        calendar={calendar}
        getCalendar={getCalendar}
      />
      <Footer />
    </div>
  );
};

// state
const mapStateToProps = (state) => {
  return {
    showSearchBar: state.showSearchBar,
    showTicketPurchaseForm: state.showTicketPurchaseForm,
    showFilter: state.showFilter,
    ageList: state.age,
    genreList: state.genres,
    films: state.films,
    calendar: state.calendar,
  };
};

const mapDispatchToProps = {
  toggleSearchBar,
  toggleTicketPurchaseForm,
  toggleFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  getMovies,
  getCalendar,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
