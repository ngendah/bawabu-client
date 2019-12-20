import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_TYPE, API_RESULT, ApiResults } from '@/common/constants';

const Axios = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
});


function* apiCall(action) {
  try {
    const response = yield call(Axios, action.payload);
    yield put({ type: API_RESULT, status: ApiResults.SUCCESS, response });
  } catch (error) {
    yield put({ type: API_RESULT, status: ApiResults.ERROR, response: error });
  }
}

export default function* api() {
  yield takeLatest(API_TYPE, apiCall);
}
