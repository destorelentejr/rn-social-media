import { combineReducers } from 'redux';

import Profile from './profile/reducer';

const appReducers = combineReducers({ Profile });

export default rootReducer = (state, act) => {

    return appReducers(state, act);
  }