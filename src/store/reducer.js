import {
  CHANGING_TOWN,
  FILLING_OFFERS,
  FILL_DETAIL_OFFER,
  SORT_OFFERS,
  HOVER_OFFER_CHANGE,
  DATA_LOADED_STATUS,
  AUTH_STATUS_CHANGE,
  LOGIN, NOT_FOUND,
  FILL_DETAIL_REVIEWS,
  FILL_DETAIL_NEARBY
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CHANGING_TOWN:
      return {
        ...state,
        currentTown: action.payload
      };
    case FILLING_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    case FILL_DETAIL_OFFER:
      return {
        ...state,
        detailOffer: action.payload
      };
    case FILL_DETAIL_REVIEWS:
      return {
        ...state,
        detailReviews: action.payload
      };
    case FILL_DETAIL_NEARBY:
      return {
        ...state,
        detailNearby: action.payload
      };
    case SORT_OFFERS:
      return {
        ...state,
        sort: action.payload
      };
    case HOVER_OFFER_CHANGE:
      return {
        ...state,
        hoverOfferId: action.payload
      };
    case DATA_LOADED_STATUS:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case AUTH_STATUS_CHANGE:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        userData: action.payload
      };
    case NOT_FOUND:
      return {
        ...state,
        notFound: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
