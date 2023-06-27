import { GET_EXTERNAL_CONTENT } from '../../constants/ActionTypes';

export function getExternalContent(url) {
  return {
    type: GET_EXTERNAL_CONTENT,
    request: {
      op: 'get',
      path: url,
    },
  };
}
