import React from "react";
import Layout from "../components/layout/layout";
import PropTypes from "prop-types";

const WithLayout = (props) => {
  return <React.Fragment>
    <Layout>
      {props.children}
    </Layout>
  </React.Fragment>;
};

WithLayout.propTypes = {
  children: PropTypes.node
};

export default WithLayout;
