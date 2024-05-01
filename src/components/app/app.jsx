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
import {ApiActionsCreator} from "../../store/api-actions";
import {ActionsCreator} from "../../store/actions";

const App = (props) => {
  const {placeCards} = props;
  return <BrowserRouter>
    <Routes>
      {/* {placeCards.map((card) => {*/}
      {/*  const id = card.id;*/}
      {/*  let reviewsOfThisCard = props.reviews[id];*/}
      {/*  let others = placeCards.filter((placeCard) => {*/}
      {/*    return placeCard.id !== id; // используем others после его объявления*/}
      {/*  });*/}
      {/*  if (others.length > 3) { // проверяем длину отфильтрованного массива*/}
      {/*    others = others.slice(0, 3); // если длина больше 3, обрезаем массив до первых трёх элементов*/}
      {/*  }*/}
      {/*  return (*/}
      {/*    <Route*/}
      {/*      key={id} // Уникальный ключ для каждого маршрута*/}
      {/*      path={`offer/${card.id}`} // Путь для маршрута*/}
      {/*      element={<WithLayout><Offer reviews={reviewsOfThisCard ? reviewsOfThisCard : []} card={card}*/}
      {/*        others={others}/></WithLayout>} // Передаем оффер в компонент Offer*/}
      {/*    />*/}
      {/*  );*/}
      {/* })}*/}
      <Route path="/offer/:id" exact
        element={<WithLayout><Offer reviews={[]}
          others={[]}/></WithLayout>}/>
      <Route path="favorites"
        element={<WithLayout><Favorites
          placeCards={props.placeCards.filter((item) => item.isFavorite)}/></WithLayout>}/>
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

const mapStateToProps = (state) => ({
  placeCards: state.offers,
  currentTown: state.currentTown,
});

App.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(ReviewCardProps))),
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
};

export {App};
export default connect(mapStateToProps)(App);

