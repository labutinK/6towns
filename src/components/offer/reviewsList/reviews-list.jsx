import React from "react";
import PropTypes from "prop-types";
import {ReviewCardProps} from "../../../proptypes/review-card";
import {getWidthFromStars} from "../../../utils/utils";

const ReviewsList = (props) => {
  const {reviews} = props;

  const formatData = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    };

    return date.toLocaleString(`en-US`, options);
  };

  return (reviews.length > 0 && (
    <ul className="reviews__list">
      {reviews.map((review, key) => (
        <li key={key} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54"
                alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {review.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: getWidthFromStars(review.stars)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.text}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
              {formatData(review.date)}
            </time>
          </div>
        </li>
      ))
      }
    </ul>
  )
  );
};


ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewCardProps)),
};


export default ReviewsList;
