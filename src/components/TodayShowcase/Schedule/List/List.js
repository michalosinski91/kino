import React from "react";
import ListItem from "./ListItem/ListItem";
import "./List.scss";

export default function List() {
  return (
    <div className="list">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
