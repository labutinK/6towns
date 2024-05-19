import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.data].offers;
export const getDetailReviews = (state) => state[NameSpace.data].detailReviews;
export const getDetailNearby = (state) => state[NameSpace.data].detailNearby;
export const getDetailOffer = (state) => state[NameSpace.data].detailOffer;
