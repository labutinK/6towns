import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";

const OffersList = (props) => {
  const {placeCards, className, hoverHandler} = props;
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    hoverHandler(id);
  }
  function mouseOutOfferHandler() {
    hoverHandler(0);
  }

  return <div className={`${className}`}>
    {placeCards.map((card, i) => {
      return <PlaceCard card={card} key={card.id + i}
        onMouseover={mouseOnOfferHandler}
        onMouseLeave={mouseOutOfferHandler}
      ></PlaceCard>;
    })}
  </div>;
};

OffersList.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  className: PropTypes.string,
};

export default OffersList;
