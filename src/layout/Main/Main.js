import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.scss";
import Home from "../../pages/Home/Home";
import Films from "../../pages/Films/Films";
import Calendar from "../../pages/Calendar/Calendar";
import BoxOffice from "../../pages/BoxOffice/BoxOffice";
import AboutUs from "../../pages/AboutUs/AboutUs";
import FilmSelect from "../../pages/FilmSelect/FilmSelect";
import NotFound from "../../pages/NotFound/NotFound";
import FilmDetail from "../../components/FilmDetail/FilmDetail";

export default function Main() {
  return (
    <div className="main-container" data-testid="main-container">
      <Switch>
        <Route path="/onas" component={AboutUs} />
        <Route path="/repertuar" component={Films} />
        <Route path="/kalendarz" component={Calendar} />
        <Route path="/bilety" component={BoxOffice} />
        <Route path="/film/:id" component={FilmDetail} />
        <Route path="/film" component={FilmSelect} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
