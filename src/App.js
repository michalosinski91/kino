import React from "react";

import Navbar from "./layout/Navbar/Navbar";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

//Redux
import { connect } from "react-redux";
import {
  toggleSearchBar,
  toggleTicketPurchaseForm,
} from "./store/actions/actions";

// named export of App component for testing purposes.
// the default export is the connect component, which, if imported in the test file
// would return the wrapper component, and not the App component itself
export const App = ({
  showSearchBar,
  toggleSearchBar,
  showTicketPurchaseForm,
  toggleTicketPurchaseForm,
}) => {
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
  };
};

const mapDispatchToProps = {
  toggleSearchBar,
  toggleTicketPurchaseForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
