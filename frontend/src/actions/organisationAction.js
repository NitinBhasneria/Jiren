import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  ORGANISATION_LOADED,
  ORGANISATION_LOADING_ERROR,
  ORGANISATION_LOADING
} from './types';

// LOAD ORGANISATION DETAIL
export const loadOrganisation = (name) => async (dispatch, getState) => {
  dispatch({ type: ORGANISATION_LOADING });
  try {
    const res = await axios.get(`/academy/${name}`);
    dispatch({
      type: ORGANISATION_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORGANISATION_LOADING_ERROR
    });
  }
};
