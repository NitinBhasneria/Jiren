import axios from 'axios';

import {
  ORGANISATION_LOADED,
  ORGANISATION_LOADING_ERROR,
  ORGANISATION_LOADING
} from './types';

const API_URL = 'http://localhost:8000';

// LOAD ORGANISATION DETAIL
export const loadOrganisation = (name) => async (dispatch, getState) => {
  dispatch({ type: ORGANISATION_LOADING });
  try {
    const res = await axios.get(`${API_URL}/api/organization/${name}/`);
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
