import React from "react";

export default function ListItem({ data, handleDisplayPhotoChange }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  function handleMouseEnter() {
    handleDisplayPhotoChange(data.film.poster);
  }

  return (
    <div className="list__item" onMouseEnter={() => handleMouseEnter()}>
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
