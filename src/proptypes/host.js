import PropTypes from "prop-types";

export const hostProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.bool,
};
