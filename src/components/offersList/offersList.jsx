import React, {useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";

const OffersList = (props) => {
  const {placeCards, className} = props;
  const [activeEl, setActiveEl] = React.useState(0);
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    setActiveEl(id);
  }

  return <div className={`${className}`}>
    {placeCards.map((card, i) =><PlaceCard card={card} key={card.id + i}
      onMouseover={mouseOnOfferHandler}></PlaceCard>)}
  </div>;
};


OffersList.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
};

export default OffersList;
