import React from "react";
import "./Copyright.scss";

export default function Copyright() {
  return (
    <div className="copyright">
      <p>
        Built by{" "}
        <a href="https://www.michalosinski.dev" target="blank">
          Michał Osiński
        </a>
        . Inspiration taken from{" "}
        <a href="https://nowyteatr.org/pl" target="blank">
          nowyteatr.org
        </a>
      </p>
    </div>
  );
}
