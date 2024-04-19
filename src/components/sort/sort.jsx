import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const ACTIVE_SORT_ID = 1;

const Sort = (props) => {
  const {items, changeHandler} = props;

  const listRef = React.createRef();
  const [opened, setOpened] = React.useState(false);
  const [activeSort, setSort] = React.useState(ACTIVE_SORT_ID);

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

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleOpened}>
        {items.map((item) => {
          if (item.id === activeSort) {
            return item.name;
          }
        })}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`}
        ref={listRef}>
        {items.map((item) => (
          <li key={item.id} className={`places__option ${item.id === activeSort && `places__option--active`}`}
            onClick={() => {
              setSort(item.id);
              changeHandler(item.id);
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

export default Sort;
