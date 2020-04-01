import React from "react";

export default function ListItem() {
  return (
    <div className="list__item">
      <div className="list__item-main">
        <p>Test Title</p>
        <p>12.00</p>
      </div>
      <p className="list__item-description">Test description</p>
    </div>
  );
}
