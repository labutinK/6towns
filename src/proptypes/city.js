import PropTypes from "prop-types";

export const cityProps = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ]),
    longitude: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ]),
    zoom: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ]),
  })
};
