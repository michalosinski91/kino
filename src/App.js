import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";

export default function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

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
