import React from "react";
import PropTypes from "prop-types";
import FeatureType from "../feature/feature-type";
import FeatureCanlive from "../feature/feature-canlive";
import FeatureContain from "../feature/feature-contain";

const TYPES = {
  CLASS: `class`,
  CONTAIN: `contains`,
  CANLIVEAMOUNT: `canliveamount`
};

const getComponentByType = (type, text, key) => {
  switch (type) {
    case TYPES.CLASS:
      return <FeatureType key={key} text={text}></FeatureType>;
    case TYPES.CONTAIN:
      return <FeatureContain key={key} text={text}></FeatureContain>;
    case TYPES.CANLIVEAMOUNT:
      return <FeatureCanlive key={key} text={text}></FeatureCanlive>;
  }
  return ``;
};

const FeatureList = (props) => {
  const {features} = props;
  return <ul className="property__features">
    {
      features.map((feature, index) => (
        getComponentByType(feature.type, feature.text, index))
      )
    }
  </ul>;
};


FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }))
};


export default FeatureList;
