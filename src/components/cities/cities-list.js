import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {ActionsCreator} from "../../store/actions";
import {connect} from "react-redux";

const CitiesList = (props) => {
  const {items, currentTown, setCurrentCity} = props;

  const [activeLocal, setActiveLocal] = useState(currentTown);

  useEffect(() => {
    setActiveLocal(currentTown);
  }, [currentTown]);

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
                    setCurrentCity(city.name);
                  }}
                >
                  <a className={`locations__item-link tabs__item ${city.name === activeLocal && `tabs__item--active`}`}
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
  currentTown: state.currentTown,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(cityName) {
    dispatch(ActionsCreator.townChange(cityName));
  },
});


CitiesList.propTypes = {
  currentTown: PropTypes.string.isRequired,
  setCurrentCity: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
