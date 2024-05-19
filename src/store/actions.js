import {createAction} from '@reduxjs/toolkit';

export const CHANGING_TOWN = `CHANGING_TOWN`;
export const FILLING_OFFERS = `FILLING_OFFERS`;
export const SORT_OFFERS = `SORT_OFFERS`;
export const HOVER_OFFER_CHANGE = `HOVER_OFFER_CHANGE`;
export const DATA_LOADED_STATUS = `DATA_LOADED_STATUS`;
export const AUTH_STATUS_CHANGE = `AUTH_STATUS_CHANGE`;
export const FILL_DETAIL_OFFER = `FILL_DETAIL_OFFER`;
export const LOGIN = `LOGIN`;
export const NOT_FOUND = `NOT_FOUND`;
export const REQUEST_ERROR = `REQUEST_ERROR`;
export const COMMENT_ERROR = `COMMENT_ERROR`;
export const FILL_DETAIL_REVIEWS = `FILL_DETAIL_REVIEWS`;
export const FILL_DETAIL_NEARBY = `FILL_DETAIL_NEARBY`;

export const townChange = createAction(CHANGING_TOWN, (town) => {
  return {
    payload: town,
  };
});

export const fillOffers = createAction(FILLING_OFFERS, (offers) => {
  return {
    payload: offers,
  };
});

export const sortChange = createAction(SORT_OFFERS, (sort) => {
  return {
    payload: sort,
  };
});

export const hoverOfferId = createAction(HOVER_OFFER_CHANGE, (id) => {
  return {
    payload: id,
  };
});

export const dataIsLoaded = createAction(DATA_LOADED_STATUS, (status) => {
  return {
    payload: status,
  };
});

export const fillDetailOffer = createAction(FILL_DETAIL_OFFER, (offer) => {
  return {
    payload: offer,
  };
});

export const fillDetailReviews = createAction(FILL_DETAIL_REVIEWS, (reviews) => {
  return {
    payload: reviews,
  };
});

export const fillNearbyOffers = createAction(FILL_DETAIL_NEARBY, (offers) => {
  return {
    payload: offers,
  };
});

export const authStatusChange = createAction(AUTH_STATUS_CHANGE, (newStatus) => {
  return {
    payload: newStatus,
  };
});

export const login = createAction(LOGIN, (fd) => {
  return {
    payload: fd,
  };
});

export const notFound = createAction(NOT_FOUND, (status) => {
  return {
    payload: status,
  };
});

export const requestError = createAction(REQUEST_ERROR, (status) => {
  return {
    payload: status,
  };
});

export const commentError = createAction(COMMENT_ERROR, (error) => {
  return {
    payload: error,
  };
});
