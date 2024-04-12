import PropTypes from "prop-types";

export const ReviewCardProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  text: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
