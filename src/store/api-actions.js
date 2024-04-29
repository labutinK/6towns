import {ActionsCreator} from "./actions";

export const GET_OFFERS = `GET_OFFERS`;

export const ApiActionsCreator = {
  getOffers: () => async (dispatch, _getState, api) => (
    api.get(`/points`).then(({data}) => {
      dispatch(ActionsCreator.dataIsLoaded());
    })
  )
};
