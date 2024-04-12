import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {PLACE_CARDS} from "./mock/offers";
import {REVIEWS} from "./mock/reviews";

const PLACES_TO_STAY = 34;


ReactDOM.render(
    <App
      placesFound={PLACES_TO_STAY}
      placeCards={PLACE_CARDS}
      reviews={REVIEWS}
    >
    </App>,
    document.getElementById(`root`)
);
