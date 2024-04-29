const popularSort = (cards) => {
  return cards;
};
const priceToLowSort = (cards) => {
  return cards.sort((a, b) => a.price - b.price);
};
const priceToHighSort = (cards) => {
  return cards.sort((a, b) => b.price - a.price);
};
const topRatedSort = (cards) => {
  return cards.sort((a, b) => b.stars - a.stars);
};

export const POPULAR_SORT = `POPULAR_SORT`;
export const PRICE_TO_HIGH_SORT = `PRICE_TO_HIGH_SORT`;
export const PRICE_TO_LOW_SORT = `PRICE_TO_LOW_SORT`;
export const RATED_SORT = `RATED_SORT`;

export const SORTS = {
  POPULAR_SORT: {
    id: 1,
    name: `Popular`,
    sortFunc: popularSort
  },
  PRICE_TO_HIGH_SORT: {
    id: 2,
    name: `Price: low to high`,
    sortFunc: priceToLowSort
  },
  PRICE_TO_LOW_SORT: {
    id: 3,
    name: `Price: high to low`,
    sortFunc: priceToHighSort
  },
  RATED_SORT:
    {
      id: 4,
      name: `Top rated first`,
      sortFunc: topRatedSort
    }
};

export const API_ROUTES = {
};
