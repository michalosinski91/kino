import React from "react";
import "./News.scss";
import NewsItem from "./NewsItem/NewsItem";

export default function News() {
  return (
    <section className="news">
      <h2 className="heading heading--secondary">Aktualności</h2>
      <div className="news__grid">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </section>
  );
}
