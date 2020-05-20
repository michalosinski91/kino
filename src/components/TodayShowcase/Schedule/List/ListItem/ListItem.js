import React from "react";

export default function ListItem({ data, handleDisplayPhotoChange }) {
  if (!data) {
    return <p data-testid="loading">Loading...</p>;
  }

  return (
    <div
      data-testid="list-item-container"
      className="list__item"
      onMouseEnter={() => handleDisplayPhotoChange(data.film.poster)}
    >
      <div className="list__item-main">
        <p>{data.film.title}</p>
        <p>{data.time}</p>
      </div>
      <p className="list__item-description">
        {data.seatsAvailable.length} miejsc dostępnych na seans
      </p>
    </div>
  );
}
