import React from "react";
import PropTypes from "prop-types";

const Feature = (props) => {
  const {className, text} = props;
  return (<li className={`property__feature ${className}`}>
    {text}
  </li>);
};


Feature.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};


export default Feature;
