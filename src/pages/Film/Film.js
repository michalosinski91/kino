import React from "react";

export default function Film(props) {
  const filmId = props.match.params.id || 0;
  return <div>{filmId}</div>;
}
