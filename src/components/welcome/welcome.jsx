import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import OffersList from "../offersList/offersList";
import Map from "../map/map";
import CitiesList from "../cities/cities-list";
import Sort from "../sort/sort";
import {SORTS} from "../../const/const";
import {connect} from "react-redux";
import {ApiActionsCreator} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";

const Welcome = (props) => {
  const {placeCards, towns, currentTown, sort, isDataLoaded, onLoadData} = props;

  const [offers, setNewOffers] = React.useState(placeCards);

  const arraysAreEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].id !== arr2[i].id) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    const sortedOffers = SORTS[sort] && SORTS[sort].sortFunc([...placeCards]);
    if (!arraysAreEqual(offers, sortedOffers)) {
      setNewOffers(sortedOffers);
    }
  }, [sort, currentTown]);


  if (!isDataLoaded) {
    return <LoadingScreen></LoadingScreen>;
  }

  return <div className="page page--gray page--main">
    {props.children}
    <main className="page__main page__main--index">
      <CitiesList items={towns}></CitiesList>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentTown}</b>
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

const mapStateToProps = (state) => ({
  sort: state.sort,
  currentHoverOfferId: state.hoverOfferId,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  async onLoadData() {
    dispatch(ApiActionsCreator.getOffers());
  },
});


Welcome.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  children: PropTypes.node,
  currentTown: PropTypes.string.isRequired,
  towns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })),
  sort: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

