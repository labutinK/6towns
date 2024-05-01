import {ActionsCreator} from "./actions";

const adaptPointToClient = (pointServer) => {
  let pointClient = Object.assign(
      {},
      pointServer,
      {
        name: pointServer.title,
        isFavorite: pointServer.is_favorite,
        isPremium: pointServer.is_premium,
        img: pointServer.preview_image,
        stars: pointServer.rating,
        town: ``,
      }
  );

  pointClient.features = [];
  if (pointServer.max_adults) {
    pointClient.features.push({
      type: `canliveamount`,
      text: `Max ${pointServer.max_adults} adults`,
    });
  }
  if (pointServer.bedrooms) {
    pointClient.features.push({
      type: `contains`,
      text: `${pointServer.bedrooms} bedrooms`,
    });
  }
  if (pointServer.type) {
    pointClient.features.push({
      type: `class`,
      text: `${pointServer.type}`,
    });
  }
  if (pointServer.host) {
    if (pointServer.host && pointServer.host.avatar_url) {
      pointClient.host.avatar = pointServer.host.avatar_url;
    }
    if (pointServer.host && pointServer.host.is_pro) {
      pointClient.host.status = pointServer.host.is_pro;
    }
    if (pointServer.host && pointServer.host.text) {
      pointClient.host.description = pointServer.host.text;
    } else {
      pointClient.host.description = ``;
    }
  }


  delete pointClient.host.is_pro;
  delete pointClient.host.avatar_url;
  delete pointClient.host.text;
  delete pointClient.is_favorite;
  delete pointClient.is_premium;
  delete pointClient.base_price;
  delete pointClient.preview_image;
  delete pointClient.rating;

  return pointClient;
};

export const GET_OFFERS = `GET_OFFERS`;

export const ApiActionsCreator = {
  getOffers: () => async (dispatch, _getState, api) => {
    const {data} = await api.get(`/hotels`);
    dispatch(ActionsCreator.fillOffers(data.map((item) => adaptPointToClient(item))));
    dispatch(ActionsCreator.dataIsLoaded());
  }
};
