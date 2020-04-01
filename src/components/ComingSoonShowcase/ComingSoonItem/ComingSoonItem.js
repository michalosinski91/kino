import React from "react";

export default function ComingSoonItem() {
  return (
    <div className="coming-soon__item">
      <img
        src="https://images.unsplash.com/photo-1582691236485-4d0850eb36e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
        alt="photo"
        className="coming-soon__photo"
      />
      <p className="coming-soon__date">
        <strong>03.04</strong> 16.00
      </p>
      <p className="coming-soon__title">Test Title</p>
    </div>
  );
}
