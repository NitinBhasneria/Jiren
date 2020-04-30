import auth from './auth';
import organisation from './organisation'
import { combineReducers } from 'redux'
import { LOGOUT_SUCCESS } from './../actions/types'
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  form: formReducer,
  auth,
  organisation
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;