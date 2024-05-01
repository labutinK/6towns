import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";
import offersWithStore from "./hocs/offers-with-store";

const OffersList = (props) => {
  const {placeCards, className, hoverOfferId, setNewHoverOffer} = props;
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    if (hoverOfferId !== id) {
      setNewHoverOffer(id);
    }
  }

  function mouseOutOfferHandler() {
    setNewHoverOffer(0);
  }

  return <div className={`${className}`}>
    {placeCards.map((card) => {
      return <PlaceCard card={card} key={card.id}
        onMouseover={mouseOnOfferHandler}
        onMouseLeave={mouseOutOfferHandler}
      ></PlaceCard>;
    })}
  </div>;
};

OffersList.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  className: PropTypes.string,
  hoverOfferId: PropTypes.number,
  setNewHoverOffer: PropTypes.func
};

export default offersWithStore(OffersList);


