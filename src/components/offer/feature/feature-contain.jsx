import React from "react";
import PropTypes from "prop-types";
import Feature from "./feature";

const FeatureContain = (props) => {
  const {text} = props;
  return <Feature className={`property__feature--bedrooms`}
    text={text}></Feature>;
};


FeatureContain.propTypes = {
  text: PropTypes.string.isRequired,
};


export default FeatureContain;
