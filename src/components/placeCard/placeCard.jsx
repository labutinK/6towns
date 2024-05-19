import React from "react";
import PropTypes from "prop-types";
import {placeCardProps} from "../../proptypes/place-card";
import {Link} from "react-router-dom";
import {getWidthFromStars} from "../../utils/utils";

const PlaceCard = (props) => {
  const {id, name, isPremium, stars, img, price, type, isFavorite} = props.card;
  const onMouseOver = props.onMouseover;
  const onMouseLeve = props.onMouseLeave;

  return <article className="cities__place-card place-card" onMouseLeave={onMouseLeve} onMouseOver={() => {
    onMouseOver(id);
  }}>
    {isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${id}`}>
        <img className="place-card__image" src={img} width="260" height="200"
          alt="Place image"/>
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
          type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getWidthFromStars(stars)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`offer/${id}`}>
          {name}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
  ;
};


PlaceCard.propTypes = {
  onMouseover: PropTypes.func,
  onMouseLeave: PropTypes.func,
  card: PropTypes.shape(placeCardProps)
};

export default PlaceCard;
