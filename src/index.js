import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {PLACE_CARDS} from "./mock/offers";
import {REVIEWS} from "./mock/reviews";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {towns} from "./mock/towns";

const PLACES_TO_STAY = 34;


ReactDOM.render(
    <Provider store={store}>
      <App
        placesFound={PLACES_TO_STAY}
        placeCards={PLACE_CARDS}
        reviews={REVIEWS}
        towns={towns}
      >
      </App>
    </Provider>,
    document.getElementById(`root`)
);
