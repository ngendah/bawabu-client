import { API_RESULT, ApiResults } from '~/common/constants';

function onLoginSuccess(response) {
  return Object.assign({}, response.data, {isAuthenticated: true});
}

function onLoginFailure(response) {
  return {isAuthenticated: false};
}

export default function reducers (state, action) {
  switch(action.type) {
    case API_RESULT:
      const processor = {
        [ApiResults.SUCCESS]: onLoginSuccess,
        [ApiResults.ERROR]: onLoginFailure,
      };
      return { key: action.type, user: processor[action.status](action.response) };
    default:
      return state;
  } 
}
