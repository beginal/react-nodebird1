import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducer/user';


function* loginAPI() {
  return axios.post('/login')

}

function* signUpAPI() {
  return axios.post('/signup')
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS,
    })
  } catch(e) {
    console.error(e)
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login)
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}


export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignup),
  ]);
}