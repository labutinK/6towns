import React from "react";
import PropTypes from "prop-types";
import Feature from "./feature";

const FeatureType = (props) => {
  const {text} = props;
  return <Feature className={`property__feature--entire`}
    text={text}></Feature>;
};


FeatureType.propTypes = {
  text: PropTypes.string.isRequired,
};


export default FeatureType;
