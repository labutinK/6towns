import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {REVIEWS} from "./mock/reviews";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {towns} from "./mock/towns";


ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={REVIEWS}
        towns={towns}
      >
      </App>
    </Provider>,
    document.getElementById(`root`)
);
