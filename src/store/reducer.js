import {CHANGING_TOWN, FILLING_OFFERS} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CHANGING_TOWN:
      return {
        ...state,
        currentTownId: action.payload
      };
    case FILLING_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
