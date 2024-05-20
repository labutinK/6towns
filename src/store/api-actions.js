import {API_ROUTES, AUTH_STATUS} from "../const/const";
import {
  fillDetailOffer,
  fillOffers,
  fillNearbyOffers,
  fillDetailReviews,
  dataIsLoaded,
  notFound,
  requestError,
  commentError,
  login,
  authStatusChange
} from "./actions";

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

const adaptReviewToClient = (reviewServer) => {
  let reviewClient = Object.assign(
      {},
      reviewServer,
      {
        text: reviewServer.comment,
        stars: reviewServer.rating,
      }
  );

  if (reviewServer.user) {
    if (reviewServer.user.avatar_url) {
      reviewClient.avatar = reviewServer.user.avatar_url;
    }
    if (reviewServer.user.name) {
      reviewClient.name = reviewServer.user.name;
    }
  }

  delete reviewClient.comment;
  delete reviewClient.rating;
  delete reviewClient.user;

  return reviewClient;
};

export const getOffersData = () => async (dispatch, _getState, api) => {
  return api.get(API_ROUTES.HOTELS).then(({data}) => {
    dispatch(fillOffers(data.map((item) => adaptPointToClient(item))));
  }).then(() => {
    dispatch(dataIsLoaded(true));
  });
};

export const getDetailOfferData = (id) => async (dispatch, _getState, api) => {
  try {
    const hotels = await api.get(API_ROUTES.HOTELS + `/` + id);
    const comments = await api.get(API_ROUTES.COMMENTS + `/` + id);
    const nearby = await api.get(API_ROUTES.HOTELS + `/` + id + `/nearby`);
    dispatch(fillDetailReviews(comments.data.slice(0, 3).map((review) => adaptReviewToClient(review))));
    dispatch(fillNearbyOffers(nearby.data.slice(0, 3).map((item) => adaptPointToClient(item))));
    dispatch(fillDetailOffer(adaptPointToClient(hotels.data)));
  } catch (error) {
    dispatch(notFound(true));
  }
};

export const loginCheck = () => (dispatch, _getState, api) => {
  api.get(API_ROUTES.LOGIN).then(() => dispatch(authStatusChange(AUTH_STATUS.AUTH))).catch(() => {
  });
};

export const goLogin = (fd, navigate) => (dispatch, _getState, api) => {
  api.post(API_ROUTES.LOGIN, fd).then(({data}) => {
    dispatch(login(data));
    dispatch(authStatusChange(AUTH_STATUS.AUTH));
    navigate(`/`);
  }).catch(() => {
  });
};

export const resetAllDetailData = () => (dispatch, _getState) => {
  dispatch(fillDetailReviews([]));
  dispatch(fillNearbyOffers([]));
  dispatch(fillDetailOffer({}));
};

export const postComment = (data, id) => (dispatch, _getState, api) => {
  api.post(API_ROUTES.COMMENTS + `/` + id, data).then(({data}) => {
  }).catch((error) => {
    dispatch(requestError(true));
    dispatch(commentError(error.response.data.error));
  });
};
