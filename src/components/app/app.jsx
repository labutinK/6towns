import React from "react";
import Welcome from "../welcome/welcome";
import Favorites from "../favorites/favorites";
import PropTypes from "prop-types";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WithLayout from "../../layout/with-layout";
import Login from "../login/login";
import Offer from "../offer/offer";
import {Fragment} from "react";
import {Link} from "react-router-dom";

const App = (props) => {
  return <BrowserRouter>
    <Routes>
      <Route path="offer/:id" element={<WithLayout><Offer /></WithLayout>} />
      <Route path="favorites" element={<WithLayout><Favorites /></WithLayout>} />
      <Route path="login" element={<WithLayout><Login /></WithLayout>} />
      <Route path="/" element={<WithLayout><Welcome placeCards={props.placeCards}
        placesFound={props.placesFound} /></WithLayout>} />
      <Route
        path="*"
        element={
          <WithLayout>
            <section className="error">
              <div className="container">
                <h1>404. <br /><small>Page not found</small></h1>
                <Link to="/">Go to main page</Link>
              </div>
            </section>
          </WithLayout>
        }
      />
    </Routes>
  </BrowserRouter>;

};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
  placeCards: PropTypes.array.isRequired
};

export default App;
