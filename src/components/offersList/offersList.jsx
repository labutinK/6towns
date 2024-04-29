import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";
import {ActionsCreator} from "../../store/actions";
import {connect} from "react-redux";

const OffersList = (props) => {
  const {placeCards, className, setNewHoverOffer} = props;
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    setNewHoverOffer(id);
  }

  function mouseOutOfferHandler() {
    setNewHoverOffer(0);
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
  hoverOfferId: PropTypes.number,
  setNewHoverOffer: PropTypes.func
};

const mapDispatchToProprs = (dispatch) => ({
  setNewHoverOffer: (id) => {
    dispatch(ActionsCreator.hoverOfferId(id));
  }
});

export default connect(null, mapDispatchToProprs)(OffersList);
