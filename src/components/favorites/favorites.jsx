import React from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import FavoriteCard from "../favoriteCard/favoriteCard";

const Favorites = (props) => {
  const items = props.placeCards;
  return <div className="page">
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {items.map((card) => <FavoriteCard card={card} key={card.id}/>)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  </div>;
};

Favorites.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
};

export default Favorites;
