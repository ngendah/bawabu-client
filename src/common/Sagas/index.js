import { all } from 'redux-saga/effects';
import { Api } from '~/common/Api';


export function* rootSaga () {
  yield all([Api()]);
}

