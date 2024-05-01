import {POPULAR_SORT} from "../const/const";

export const initialState = {
  currentTown: {
    name: ``,
    location: {
      latitude: ``,
      longitude: ``,
      zoom: ``
    }
  },
  sort: POPULAR_SORT,
  hoverOfferId: 0,
  isDataLoaded: false,
  offers: []
};
