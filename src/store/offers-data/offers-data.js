import {
  fillNearbyOffers,
  fillOffers,
  fillDetailOffer,
  fillDetailReviews
} from "../actions";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  detailOffer: {},
  detailReviews: [],
  detailNearby: [],
  offers: [],
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(fillOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(fillDetailOffer, (state, action) => {
    state.detailOffer = action.payload;
  });
  builder.addCase(fillDetailReviews, (state, action) => {
    state.detailReviews = action.payload;
  });
  builder.addCase(fillNearbyOffers, (state, action) => {
    state.detailNearby = action.payload;
  });
});
export {offersData};
