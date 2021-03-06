import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
import * as serviceWorker from "../src/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
