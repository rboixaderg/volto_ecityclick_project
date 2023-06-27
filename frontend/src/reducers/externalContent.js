import { GET_EXTERNAL_CONTENT } from '../constants/ActionTypes';
const initialState = {
  error: null,
  data: {},
  loaded: false,
  loading: false,
};

/**
 * externalContent reducer.
 * @function navigation
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export function externalContent(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_EXTERNAL_CONTENT}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${GET_EXTERNAL_CONTENT}_SUCCESS`:
      return {
        ...state,
        error: null,
        data: action.result,
        loaded: true,
        loading: false,
      };
    case `${GET_EXTERNAL_CONTENT}_FAIL`:
      return {
        ...state,
        error: action.error,
        data: null,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}
