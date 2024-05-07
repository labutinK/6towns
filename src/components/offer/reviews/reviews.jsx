import React from "react";
import PropTypes from "prop-types";
import ReviewForm from "../../reviewForm/review-form";
import ReviewsList from "../reviewsList/reviews-list";
import {ReviewCardProps} from "../../../proptypes/review-card";

const Reviews = (props) => {
  const {reviews} = props;
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ReviewsList reviews={reviews}></ReviewsList>
    {<ReviewForm/>}
  </section>;
};


Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewCardProps)),
};


export default Reviews;
