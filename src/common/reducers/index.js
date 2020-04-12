import { API_RESULT, ApiResults } from '~/common/constants';

function onLoginSuccess(response) {
  return { ...response.data, isAuthenticated: true };
}

function onLoginFailure() {
  return { isAuthenticated: false };
}

export default function reducers(state, action) {
  const processor = {
    [ApiResults.SUCCESS]: onLoginSuccess,
    [ApiResults.ERROR]: onLoginFailure,
  };
  switch (action.type) {
    case API_RESULT:
      return { key: action.type, user: processor[action.status](action.response) };
    default:
      return state;
  }
}
