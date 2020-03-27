import React from "react";
import { withRouter } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

//Redux
import { connect } from "react-redux";
import { toggleSearchBar } from "./store/actions/actions";

// named export of App component for testing purposes.
// the default export is the connect component, which, if imported in the test file
// would return the wrapper component, and not the App component itself
export const App = ({ showSearchBar, toggleSearchBar }) => {
  return (
    <div className="container">
      <SearchBar
        showSearchBar={showSearchBar}
        toggleSearchBar={toggleSearchBar}
      />
      <Navbar toggleSearchBar={toggleSearchBar} />
      <Main />
      <Footer />
    </div>
  );
};

// state
const mapStateToProps = state => {
  return {
    showSearchBar: state.showSearchBar
  };
};

const mapDispatchToProps = {
  toggleSearchBar
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*

return (
  <div>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
    <Switch>
      <Route path="/test" component={Test}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  </div>
);

function Home() {
  return <h2>HOME</h2>;
}

function Test() {
  return <h2>TEST</h2>;
}
*/
