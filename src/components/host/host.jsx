import React from "react";
import PropTypes from "prop-types";
import {hostProps} from "../../proptypes/host";

const Host = (props) => {
  const {name, avatar, description, status} = props.host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74"
            alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {
          status && (
            <span className="property__user-status">
              {status}
            </span>
          )
        }
      </div>
      {
        description.length > 0 && (
          <div className="property__description">
            {
              description.map((descP, key) => {
                return (
                  <p key={key} className="property__text">
                    {descP}
                  </p>
                );
              })
            }
          </div>
        )
      }
    </div>
  );
};


Host.propTypes = {
  host: PropTypes.shape(hostProps)
};


export default Host;
