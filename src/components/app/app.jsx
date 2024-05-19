import React from "react";
import Welcome from "../welcome/welcome";
import Favorites from "../favorites/favorites";
import PropTypes from "prop-types";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WithLayout from "../../layout/with-layout";
import Login from "../login/login";
import Offer from "../offer/offer";
import {Link} from "react-router-dom";
import {ReviewCardProps} from "../../proptypes/review-card";
import {placeCardProps} from "../../proptypes/place-card";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/privateRoute";
import {AUTH_STATUS} from "../../const/const";
import {getOffers} from "../../store/offers-data/selectors";
import {getCurrentTown} from "../../store/process/selectors";
import {getAuthorizationStatus} from "../../store/user/selectors";

const App = (props) => {
  const {placeCards, authorizationStatus} = props;
  return <BrowserRouter>
    <Routes>
      <Route path="/offer/:id" exact
        element={<WithLayout><Offer/></WithLayout>}/>
      <Route path="/favorites"
        element={<PrivateRoute
          auth={authorizationStatus === AUTH_STATUS.AUTH}
          redirectPath='/login/'
        >
          <WithLayout><Favorites placeCards={placeCards.filter((item) => item.isFavorite)}/></WithLayout>
        </PrivateRoute>}
      />
      <Route path="login" element={<WithLayout><Login/></WithLayout>}/>
      <Route path="/" element={<WithLayout><Welcome/></WithLayout>}/>
      <Route
        path="*"
        element={
          <WithLayout>
            <section className="error">
              <div className="container">
                <h1>404. <br/><small>Page not found</small></h1>
                <Link to="/">Go to main page</Link>
              </div>
            </section>
          </WithLayout>
        }
      />
    </Routes>
  </BrowserRouter>;

};

const mapStateToProps = ((state) => ({
  placeCards: getOffers(state),
  currentTown: getCurrentTown(state),
  authorizationStatus: getAuthorizationStatus(state)
}));

App.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(ReviewCardProps))),
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);

