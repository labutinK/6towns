import React, {useEffect, useMemo, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import OffersList from "../offersList/offersList";
import Map from "../map/map";
import CitiesList from "../cities/cities-list";
import Sort from "../sort/sort";
import {SORTS, POPULAR_SORT} from "../../const/const";
import LoadingScreen from "../loading-screen/loading-screen";
import {cityProps} from "../../proptypes/city";
import withOffers from "./hocs/with-offers";
import {useLocation} from "react-router-dom";
import {memo} from "react";

const Welcome = (props) => {
  const {sort, currentTown, hotels, isDataLoaded, onLoadData, setCurrentTown, resetDataLoadedFlag} = props;

  const [offers, setNewOffers] = useState([]);
  const [popularOffers, setNewPopularOffers] = useState([]);
  const [cities, setNewCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  const filterCards = (cards) => {
    return cards.filter((card) => card.city.name === currentTown.name);
  };

  const filteredCards = useMemo(() => filterCards(hotels), [currentTown]);

  const arraysAreEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].id !== arr2[i].id) {
        return false;
      }
    }
    return true;
  };

  const getTownsFromHotels = (hotelsList) => {
    return hotelsList.reduce((acc, offer) => {
      const city = offer.city || {};
      if (city.name && !acc.some((item) => item.name === city.name)) {
        acc.push(city);
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData().then(() => {
        setLoading(false);
      });
    } else {
      const towns = getTownsFromHotels(hotels);
      setNewCities(towns);
      setCurrentTown(towns[0]);
    }

  }, [isDataLoaded]);


  useEffect(() => {
    if (currentTown && currentTown.name) {
      setNewOffers(filteredCards);
      setNewPopularOffers(filteredCards);
    }
  }, [currentTown]);


  useEffect(() => {
    if (POPULAR_SORT === sort) {
      setNewOffers(popularOffers);
    } else {
      const sortedOffers = SORTS[sort] && SORTS[sort].sortFunc([...offers]);
      if (!arraysAreEqual(offers, sortedOffers)) {
        setNewOffers(sortedOffers);
      }
    }
  }, [sort]);

  useEffect(() => {
    resetDataLoadedFlag();
  }, [location]);

  if (!isDataLoaded || isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }

  return <div className="page page--gray page--main">
    {props.children}
    <main className="page__main page__main--index">
      <CitiesList items={cities}></CitiesList>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentTown.name}</b>
            <Sort items={SORTS}></Sort>
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
  hotels: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  children: PropTypes.node,
  currentTown: PropTypes.shape(cityProps),
  towns: PropTypes.arrayOf(PropTypes.shape(cityProps)),
  sort: PropTypes.string,
  onLoadData: PropTypes.func,
  setCurrentTown: PropTypes.func,
  isDataLoaded: PropTypes.bool,
  resetDataLoadedFlag: PropTypes.func
};

export default withOffers(memo(Welcome, (prevProps, nextProps) => {
  return (prevProps.sort === nextProps.sort && prevProps.currentTown === nextProps.currentTown
    && prevProps.offers === nextProps.offers
    && prevProps.isDataLoaded === nextProps.isDataLoaded);
}));


