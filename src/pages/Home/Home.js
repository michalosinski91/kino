import React from "react";
import "./Home.scss";
import TodayShowcase from "../../components/TodayShowcase/TodayShowcase";
import ComingSoonShowcase from "../../components/ComingSoonShowcase/ComingSoonShowcase";
import News from "../../components/News/News";

export default function Home() {
  return (
    <div className="home-container" data-testid="home">
      <TodayShowcase />
      <ComingSoonShowcase />
      <News />
    </div>
  );
}
