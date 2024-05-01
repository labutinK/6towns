import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {cityProps} from "../../proptypes/city";
import generateUniqueId from "generate-unique-id";
import citiesWithStore from "./hocs/cities-with-store";

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
                return <li key={generateUniqueId()} className='locations__item'
                  onClick={() => {
                    setCurrentCity(city);
                  }}
                >
                  <a className={`locations__item-link tabs__item ${city === activeLocal && `tabs__item--active`}`}
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


CitiesList.propTypes = {
  currentTown: PropTypes.shape(cityProps),
  setCurrentCity: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape(cityProps))
};

export default citiesWithStore(CitiesList);
