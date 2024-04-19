
const popularSort = (cards) => {
  return cards;
};
const priceToLowSort = (cards) => {
  return cards.sort((a, b) => b.price - a.price);
};
const priceToHighSort = (cards) => {
  return cards.sort((a, b) => a.price - b.price);
};
const topRatedSort = (cards) => {
  return cards.sort((a, b) => b.stars - a.stars);
};
export const SORT_TYPES = [
  {
    id: 1,
    name: `Popular`,
    sortFunc: popularSort
  },
  {
    id: 2,
    name: `Price: low to high`,
    sortFunc: priceToLowSort
  },
  {
    id: 3,
    name: `Price: high to low`,
    sortFunc: priceToHighSort
  },
  {
    id: 4,
    name: `Top rated first`,
    sortFunc: topRatedSort
  },
];
