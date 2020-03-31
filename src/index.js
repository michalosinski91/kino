import React from "react";
import { render } from "react-dom";
import store from "./store/store";
import Root from "./Root";
import "core-js";

render(<Root store={store} />, document.getElementById("root"));
