import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {ActionsCreator} from "../../store/actions";
import {connect} from "react-redux";

const CitiesList = (props) => {
  const {items, currentTownId, setCurrentCity} = props;

  const [activeLocal, setActiveLocal] = useState(currentTownId);

  useEffect(() => {
    setActiveLocal(currentTownId);
  }, [currentTownId]);

  return <>
    <h1 className="visually-hidden">Cities</h1>
    {
      items.length > 0 && (
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {items.map((city) => {
                return <li key={city.id} className='locations__item'
                  onClick={() => {
                    setCurrentCity(city.id);
                  }}
                >
                  <a className={`locations__item-link tabs__item ${city.id === activeLocal && `tabs__item--active`}`}
                    href="#">
                    <span>{city.name}</span>
                  </a>
                </li>;
              })}
            </ul>
          </section>
        </div>
      )
    }
  </>;
};

const mapStateToProps = (state) => ({
  currentTownId: state.currentTownId,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(cityId) {
    dispatch(ActionsCreator.townChange(cityId));
  },
});


CitiesList.propTypes = {};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
