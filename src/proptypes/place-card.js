import PropTypes from "prop-types";

export const placeCardProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fav: PropTypes.bool,
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  img: PropTypes.string,
  mark: PropTypes.bool,
  price: PropTypes.number,
};
