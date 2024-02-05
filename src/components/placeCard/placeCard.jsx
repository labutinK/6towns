import React from "react";
import PropTypes from "prop-types";
import {placeCardProps} from "../../proptypes/place-card";

const PlaceCard = (props) => {
  const {name, mark, stars, img, price, type, fav} = props.card;
  let starsNum = 0;
  switch (stars) {
    case (1):
      starsNum = `20%`;
      break;
    case (2):
      starsNum = `40%`;
      break;
    case (3):
      starsNum = `60%`;
      break;
    case (4):
      starsNum = `80%`;
      break;
    case (5):
      starsNum = `100%`;
      break;

  }
  return <article className="cities__place-card place-card">
    {mark && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={img} width="260" height="200"
          alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${fav && `place-card__bookmark-button--active`}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: starsNum}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};


PlaceCard.propTypes = {
  card: PropTypes.shape(placeCardProps)
};

export default PlaceCard;
