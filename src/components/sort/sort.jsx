import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from "react-redux";
import {NameSpace} from "../../store/root-reducer";
import {sortChange} from "../../store/actions";

const Sort = (props) => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state[NameSpace.process].sort);
  const {items} = props;

  const listRef = React.createRef();
  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  const clickOutField = ({target}) => {
    if (listRef.current && !listRef.current.contains(target)) {
      setOpened(false);
    }
  };


  useEffect(() => {
    if (opened) {
      window.addEventListener(`click`, clickOutField);
    }
    return () => {
      if (opened) {
        window.removeEventListener(`click`, clickOutField);
      }
    };
  });

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleOpened}>
        {Object.values(items).map((item) => {
          if (getKeyByValue(items, item) === sort) {
            return item.name;
          }
        })}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`}
        ref={listRef}>
        {Object.values(items).map((item) => (
          <li key={item.id} className={`places__option ${item.id === sort && `places__option--active`}`}
            onClick={() => {
              dispatch(sortChange(getKeyByValue(items, item)));
              setOpened(false);
            }}
            tabIndex={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </form>
  );
};


Sort.propTypes = {
  items: PropTypes.object,
};

export default Sort;

