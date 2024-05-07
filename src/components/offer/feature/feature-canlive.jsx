import React from "react";
import PropTypes from "prop-types";
import Feature from "./feature";

const FeatureCanLive = (props) => {
  const {text} = props;
  return <Feature className={`property__feature--adults`}
    text={text}></Feature>;
};


FeatureCanLive.propTypes = {
  text: PropTypes.string.isRequired,
};


export default FeatureCanLive;
