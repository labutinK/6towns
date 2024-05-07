import {POPULAR_SORT, AUTH_STATUS} from "../const/const";

export const initialState = {
  currentTown: {
    name: ``,
    location: {
      latitude: ``,
      longitude: ``,
      zoom: ``
    }
  },
  userData: {},
  detailOffer: {},
  authorizationStatus: AUTH_STATUS.NO_AUTH,
  sort: POPULAR_SORT,
  hoverOfferId: 0,
  isDataLoaded: false,
  notFound: false,
  detailReviews: [],
  detailNearby: [],
  offers: []
};
