import { all } from 'redux-saga/effects';
import api from '@/common/Api';


export default function* rootSaga() {
  yield all([api()]);
}
