export const CHANGING_TOWN = `CHANGING_TOWN`;
export const FILLING_OFFERS = `FILLING_OFFERS`;
export const SORT_OFFERS = `SORT_OFFERS`;
export const HOVER_OFFER_CHANGE = `HOVER_OFFER_CHANGE`;
export const DATA_LOADED_STATUS = `DATA_LOADED_STATUS`;

export const AUTH_STATUS_CHANGE = `AUTH_STATUS_CHANGE`;

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
  dataIsLoaded: () => ({
    type: DATA_LOADED_STATUS,
    payload: true,
  }),
  authStatusChange: (newStatus) => ({
    type: AUTH_STATUS_CHANGE,
    payload: newStatus,
  })
};
