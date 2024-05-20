import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {placeCardProps} from "../../proptypes/place-card";
import PlaceCard from "../placeCard/placeCard";
import {memo} from "react";
import {useSelector, useDispatch} from "react-redux";
import {NameSpace} from "../../store/root-reducer";
import {hoverOfferId} from "../../store/actions";

const OffersList = (props) => {
  const hoverId = useSelector((state) => state[NameSpace.process].hoverOfferId);
  const {placeCards, className} = props;
  const dispatch = useDispatch();
  mouseOnOfferHandler.bind(mouseOnOfferHandler);

  function mouseOnOfferHandler(id) {
    if (hoverId !== id) {
      dispatch(hoverOfferId(id));
    }
  }

  function mouseOutOfferHandler() {
    dispatch(hoverOfferId(0));
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
};

export default memo(OffersList, (prevProps, nextProps) => {
  return prevProps.placeCards === nextProps.placeCards;
});


