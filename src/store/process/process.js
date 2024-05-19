import {POPULAR_SORT} from "../../const/const";
import {
  CHANGING_TOWN,
  COMMENT_ERROR, commentError,
  DATA_LOADED_STATUS, dataIsLoaded,
  HOVER_OFFER_CHANGE, hoverOfferId,
  NOT_FOUND, notFound,
  REQUEST_ERROR, requestError,
  SORT_OFFERS, sortChange,
  townChange
} from "../actions";
import {createReducer, current} from '@reduxjs/toolkit';


const initialState = {
  currentTown: {
    name: ``,
    location: {
      latitude: ``,
      longitude: ``,
      zoom: ``
    }
  },
  hoverOfferId: 0,
  sort: POPULAR_SORT,
  isDataLoaded: false,
  notFound: false,
  commentError: ``,
  requestError: false,
};

const process = createReducer(initialState, (builder) => {
  builder.addCase(townChange, (state, action) => {
    state.currentTown = action.payload;
  });
  builder.addCase(sortChange, (state, action) => {
    state.sort = action.payload;
  });
  builder.addCase(hoverOfferId, (state, action) => {
    state.hoverOfferId = action.payload;
  });
  builder.addCase(dataIsLoaded, (state, action) => {
    state.isDataLoaded = action.payload;
  });
  builder.addCase(notFound, (state, action) => {
    state.notFound = action.payload;
  });
  builder.addCase(requestError, (state, action) => {
    state.requestError = action.payload;
  });
  builder.addCase(commentError, (state, action) => {
    state.commentError = action.payload;
  });
});


export {process};
