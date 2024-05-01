import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {REVIEWS} from "./mock/reviews";
import {Provider} from "react-redux";
import {store} from "./store/store";


ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={REVIEWS}
      >
      </App>
    </Provider>,
    document.getElementById(`root`)
);
