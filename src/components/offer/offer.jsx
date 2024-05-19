import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import FeatureList from "./featureList/feature-list";
import Reviews from "./reviews/reviews";
import {getWidthFromStars} from "../../utils/utils";
import Host from "./host/host";
import Map from "../map/map";
import OffersList from "../offersList/offersList";
import {placeCardProps} from "../../proptypes/place-card";
import {ReviewCardProps} from "../../proptypes/review-card";
import withOfferData from "./hocs/offer-with-data";
import LoadingScreen from "../loading-screen/loading-screen";

const Offer = (props) => {
  const {card} = props;

  const {
    id,
    features,
    host,
    goods,
    name,
    images,
    location,
    price,
    stars,
    isPremium,
    fav
  } = card;

  const reviews = props.reviews;
  const others = props.others;
  const othersForMap = ([...others]);
  othersForMap.push(Object.assign(
      {},
      card,
      {
        isMain: true
      }
  ));

  console.log(`offers component`);

  const getButton = (isFav) => {
    if (isFav) {
      return <button className="property__bookmark-button property__bookmark-button--active button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>;
    } else {
      return <button className="property__bookmark-button button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>;
    }
  };


  return <div className="page">
    {props.children}
    <main className="page__main page__main--property">
      <section className="property">
        {images.length > 0 && (
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((photo, ind) => (
                  <div key={ind} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
        )}
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (<div className="property__mark"><span>Premium</span></div>)}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {name}
              </h1>
              {getButton(fav)}
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${getWidthFromStars(stars)}`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {stars}
              </span>
            </div>
            <FeatureList features={features}></FeatureList>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            {goods.length > 0 && (
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((feature) => (
                    <li key={feature} className="property__inside-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {<Host host={host}></Host>}
            {<Reviews offerId={id} reviews={reviews}></Reviews>}
          </div>
        </div>
        {<Map placeCards={othersForMap} className={`property__map`} circle={location}></Map>}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {<OffersList placeCards={others} className={`near-places__list places__list`}></OffersList>}
        </section>
      </div>
    </main>
  </div>;
};


Offer.propTypes = {
  children: PropTypes.node,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewCardProps)),
  others: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  card: PropTypes.shape(placeCardProps),
};

export default withOfferData(Offer);
