export const CHANGING_TOWN = `CHANGING_TOWN`;
export const FILLING_OFFERS = `FILLING_OFFERS`;
export const SORT_OFFERS = `SORT_OFFERS`;
export const HOVER_OFFER_CHANGE = `HOVER_OFFER_CHANGE`;
export const DATA_LOADED_STATUS = `DATA_LOADED_STATUS`;
export const AUTH_STATUS_CHANGE = `AUTH_STATUS_CHANGE`;
export const FILL_DETAIL_OFFER = `FILL_DETAIL_OFFER`;
export const LOGIN = `LOGIN`;
export const NOT_FOUND = `NOT_FOUND`;
export const FILL_DETAIL_REVIEWS = `FILL_DETAIL_REVIEWS`;
export const FILL_DETAIL_NEARBY = `FILL_DETAIL_NEARBY`;

export const ActionsCreator = {
  townChange: (town) => ({
    type: CHANGING_TOWN,
    payload: town
  }),
  fillOffers: (offers) => ({
    type: FILLING_OFFERS,
    payload: offers
  }),
  sortChange: (sort) => ({
    type: SORT_OFFERS,
    payload: sort,
  }),
  hoverOfferId: (id) => ({
    type: HOVER_OFFER_CHANGE,
    payload: id,
  }),
  dataIsLoaded: (status) => ({
    type: DATA_LOADED_STATUS,
    payload: status,
  }),
  fillDetailOffer: (offer) => ({
    type: FILL_DETAIL_OFFER,
    payload: offer
  }),
  fillDetailReviews: (reviews) => ({
    type: FILL_DETAIL_REVIEWS,
    payload: reviews,
  }),
  fillNearbyOffers: (offers) => ({
    type: FILL_DETAIL_NEARBY,
    payload: offers,
  }),
  authStatusChange: (newStatus) => ({
    type: AUTH_STATUS_CHANGE,
    payload: newStatus,
  }),
  login: (fd) => ({
    type: LOGIN,
    payload: fd,
  }),
  notFound: (status) => ({
    type: NOT_FOUND,
    payload: status
  })
};
