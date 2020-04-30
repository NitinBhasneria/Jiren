import {
  ORGANISATION_LOADED,
  ORGANISATION_LOADING_ERROR,
  ORGANISATION_LOADING
} from '../actions/types';

const initialState = {
  isLoading: false,
  organisation: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ORGANISATION_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ORGANISATION_LOADED:
      return {
        isLoading : false,
        organisation : action.payload
      };
    case ORGANISATION_LOADING_ERROR:
    default:
      return state;
  }
}