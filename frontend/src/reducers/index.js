/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { externalResourceReducer } from './externalResource';
import { externalContent } from './externalContent';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  externalResourceReducer,
  externalContent,
  // Add your reducers here
};

export default reducers;
