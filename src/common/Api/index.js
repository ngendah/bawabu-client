import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_TYPE, API_RESULT, ApiResults } from '~/common/constants';

const Axios = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
});


export function* _Api(action) {
  try {
    const response = yield call(Axios, action.payload);
    yield put ({ type: API_RESULT, status: ApiResults.SUCCESS, response });
  } catch (error) {
    yield put ({ type: API_RESULT, status: ApiResults.ERROR, response: error });
  }
}

export function* Api () {
  yield takeLatest(API_TYPE, _Api);
}
