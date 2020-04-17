import React from "react";
import "./FilmListItem.scss";

export default function FilmListItem() {
  return (
    <div className="film-list-item">
      <img
        src="https://images.unsplash.com/photo-1582691236485-4d0850eb36e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
        alt="photo"
        className="film-list-item__photo"
      />
      <p className="film-list-item__date">
        <strong>03.04</strong> 16.00
      </p>
      <p className="film-list-item__title">Test Title</p>
    </div>
  );
}
