import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {PLACE_CARDS} from "./mock/card";

const PLACES_TO_STAY = 232;


ReactDOM.render(
    <App
      placesFound={PLACES_TO_STAY}
      placeCards={PLACE_CARDS}
    >
    </App>,
    document.getElementById(`root`)
);
