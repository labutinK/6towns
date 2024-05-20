import React from "react";
import PropTypes from "prop-types";
import {cityProps} from "../../proptypes/city";
import generateUniqueId from "generate-unique-id";
import {useSelector, useDispatch} from "react-redux";
import {NameSpace} from "../../store/root-reducer";
import {townChange} from "../../store/actions";

const CitiesList = (props) => {
  const currentTown = useSelector((state) => state[NameSpace.process].currentTown);
  const {items} = props;
  const dispatch = useDispatch();

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
                    dispatch(townChange(city));
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
  items: PropTypes.arrayOf(PropTypes.shape(cityProps))
};

export default CitiesList;
