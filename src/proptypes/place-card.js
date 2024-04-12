import PropTypes from "prop-types";
import {hostProps} from "./host";

export const placeCardProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fav: PropTypes.bool,
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  img: PropTypes.string,
  mark: PropTypes.bool,
  price: PropTypes.number,
  whatsInside: PropTypes.arrayOf(PropTypes.string),
  photos: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape(hostProps)
};
