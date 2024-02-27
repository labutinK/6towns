import React, {useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";

const OffersList = (props) => {
  const {placeCards} = props;
  const [activeEl, setActiveEl] = React.useState(0);
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    setActiveEl(id);
  }

  return <div className="cities__places-list places__list tabs__content">
    {placeCards.map((card, i) => <PlaceCard card={card} key={card.id + i}
      onMouseover={mouseOnOfferHandler}></PlaceCard>)}
  </div>;
};


OffersList.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
};

export default OffersList;
