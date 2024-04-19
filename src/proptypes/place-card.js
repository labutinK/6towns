import PropTypes from "prop-types";
import {hostProps} from "./host";

export const placeCardProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  img: PropTypes.string,
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape(hostProps)
};
