import {CHANGING_TOWN, FILLING_OFFERS, SORT_OFFERS, HOVER_OFFER_CHANGE, DATA_LOADED_STATUS} from "./actions";

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
    default:
      return state;
  }
}

export default reducer;
