import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {cityProps} from "../../proptypes/city";
import generateUniqueId from "generate-unique-id";
import citiesWithStore from "./hocs/cities-with-store";
import {memo} from "react";

const CitiesList = (props) => {
  const {items, currentTown, setCurrentCity} = props;

  return <>
    <h1 className="visually-hidden">Cities</h1>
    {
      items.length > 0 && (
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {items.map((city) => {
                return <li key={generateUniqueId()} className='locations__item'
                  onClick={() => {
                    setCurrentCity(city);
                  }}
                >
                  <span className={`locations__item-link tabs__item ${city === currentTown && `tabs__item--active`}`}>
                    <span>{city.name}</span>
                  </span>
                </li>;
              })}
            </ul>
          </section>
        </div>
      )
    }
  </>;
};


CitiesList.propTypes = {
  currentTown: PropTypes.shape(cityProps),
  setCurrentCity: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape(cityProps))
};

export default citiesWithStore(memo(CitiesList, (prevProps, nextProps) => {
  return prevProps.currentTown.name === nextProps.currentTown.name;
}));
