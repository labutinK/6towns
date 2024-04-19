import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import OffersList from "../offersList/offersList";
import Map from "../map/map";
import CitiesList from "../cities/cities-list";
import Sort from "../sort/sort";

const popularSort = (cards) => {
  return cards;
};
const priceToLowSort = (cards) => {
  return cards.sort((a, b) => b.price - a.price);
};
const priceToHighSort = (cards) => {
  return cards.sort((a, b) => a.price - b.price);
};
const topRatedSort = (cards) => {
  return cards.sort((a, b) => b.stars - a.stars);
};
const SORT_TYPES = [
  {
    id: 1,
    name: `Popular`,
    sortFunc: popularSort
  },
  {
    id: 2,
    name: `Price: low to high`,
    sortFunc: priceToLowSort
  },
  {
    id: 3,
    name: `Price: high to low`,
    sortFunc: priceToHighSort
  },
  {
    id: 4,
    name: `Top rated first`,
    sortFunc: topRatedSort
  },
];
const Welcome = (props) => {
  const {placeCards, towns, currentTown} = props;

  const [offers, setNewOffers] = React.useState(placeCards);

  const sortFunction = (newSortId) => {
    const foundSortType = SORT_TYPES.find((sortType) => sortType.id === newSortId);
    const sortedOffers = foundSortType.sortFunc([...placeCards]); // Создаем копию массива placeCards
    if (!arraysAreEqual(offers, sortedOffers)) {
      setNewOffers(sortedOffers);
    }
  };

  const arraysAreEqual = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].id !== arr2[i].id) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    setNewOffers(placeCards);
  }, [placeCards]);

  return <div className="page page--gray page--main">
    {props.children}
    <main className="page__main page__main--index">
      <CitiesList items={towns}></CitiesList>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentTown}</b>
            <Sort items={SORT_TYPES} changeHandler={sortFunction}></Sort>
            {<OffersList placeCards={offers}
              className={`cities__places-list places__list tabs__content`}></OffersList>}
          </section>
          <div className="cities__right-section">
            {<Map placeCards={offers} className={`cities__map`}></Map>}
          </div>
        </div>
      </div>
    </main>
  </div>;
};


Welcome.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  children: PropTypes.node,
  currentTown: PropTypes.string.isRequired,
  towns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
};

export default Welcome;

