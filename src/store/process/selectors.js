import {NameSpace} from '../root-reducer';

export const getCurrentTown = (state) => state[NameSpace.process].currentTown;
export const getHoverOfferId = (state) => state[NameSpace.process].hoverOfferId;
export const getSort = (state) => state[NameSpace.process].sort;
export const getIsDataLoaded = (state) => state[NameSpace.process].isDataLoaded;
export const getNotFound = (state) => state[NameSpace.process].notFound;
export const getCommentError = (state) => state[NameSpace.process].commentError;
export const getRequestError = (state) => state[NameSpace.process].requestError;
