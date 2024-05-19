import {NameSpace} from '../root-reducer';

export const getUserData = (state) => state[NameSpace.user].userData;
export const getAuthorizationStatus = (state) => state[NameSpace.user].authorizationStatus;
