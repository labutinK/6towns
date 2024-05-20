import React from "react";
import Welcome from "../welcome/welcome";
import Favorites from "../favorites/favorites";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WithLayout from "../../layout/with-layout";
import Login from "../login/login";
import Offer from "../offer/offer";
import {Link} from "react-router-dom";
import PrivateRoute from "../private-route/privateRoute";
import {AUTH_STATUS} from "../../const/const";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/root-reducer";

const App = () => {
  const placeCards = useSelector((state) => state[NameSpace.data].offers);
  const authorizationStatus = useSelector((state) => state[NameSpace.user].authorizationStatus);

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

export default App;

