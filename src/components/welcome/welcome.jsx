import React from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import OffersList from "../offersList/offersList";
import Map from "../map/map";
import CitiesList from "../cities/cities-list";

const Welcome = (props) => {
  const {placeCards, placesFound, towns} = props;

  return <div className="page page--gray page--main">
    {props.children}
    <main className="page__main page__main--index">
      <CitiesList items={towns}></CitiesList>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            {<OffersList placeCards={placeCards} className={`cities__places-list places__list tabs__content`}></OffersList>}
          </section>
          <div className="cities__right-section">
            {<Map placeCards={placeCards} className={`cities__map`}></Map>}
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Welcome.propTypes = {
  placesFound: PropTypes.number.isRequired,
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  children: PropTypes.node,
};

export default Welcome;
