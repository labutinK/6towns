import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const PLACES_TO_STAY = 232;
const PLACE_CARDS = [
  1, 2, 3, 4, 5,
];

ReactDOM.render(
    <App
      placesFound={PLACES_TO_STAY}
      placeCards={PLACE_CARDS}
    >
    </App>,
    document.getElementById(`root`)
);
