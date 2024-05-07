import React from "react";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({auth, children, redirectPath}) => {
  return auth ? children : <Navigate to={redirectPath}/>;
};

PrivateRoute.propTypes = {
  auth: PropTypes.bool,
  children: PropTypes.object,
  redirectPath: PropTypes.string
};
export default PrivateRoute;
