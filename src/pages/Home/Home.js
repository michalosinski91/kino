import React from "react";
import "./Home.scss";
import TodayShowcase from "../../components/TodayShowcase/TodayShowcase";
import ComingSoonShowcase from "../../components/ComingSoonShowcase/ComingSoonShowcase";
import News from "../../components/News/News";

export default function Home({
  films,
  calendar,
  getCalendar,
  todayFilms,
  tomorrowFilms,
}) {
  return (
    <div className="home-container" data-testid="home">
      <TodayShowcase
        films={films}
        calendar={calendar}
        getCalendar={getCalendar}
        todayFilms={todayFilms}
        tomorrowFilms={tomorrowFilms}
      />
      <ComingSoonShowcase />
      <News />
    </div>
  );
}
