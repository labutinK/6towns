import {combineReducers} from 'redux';
import {process} from './process/process';
import {offersData} from './offers-data/offers-data';
import {user} from "./user/user";
export const NameSpace = {
  data: `data`,
  process: `process`,
  user: `user`
};

export default combineReducers({
  [NameSpace.data]: offersData,
  [NameSpace.process]: process,
  [NameSpace.user]: user,
});
