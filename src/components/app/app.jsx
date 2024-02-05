import React from "react";
import Welcome from "../welcome/welcome";
import PropTypes from "prop-types";


const App = (props) => {
  return <Welcome
    placeCards={props.placeCards}
    placesFound={props.placesFound}
  >
    <h1>Hello, people!</h1>
  </Welcome>;
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
  placeCards: PropTypes.array.isRequired
};

export default App;
