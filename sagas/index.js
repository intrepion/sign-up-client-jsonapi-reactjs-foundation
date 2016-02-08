import {
  take,
  put,
  call,
  fork,
} from 'redux-saga';
import * as actions from '../actions';
import {
  api,
} from '../services';

export function* signIn(getState) {
    try {
      const username = getState().username;
      const password = getState().password;
      yield call(api.signIn, username, password);
      yield put(actions.signInSuccess(username));
    } catch(error) {
      yield put(actions.signInFailure(error));
    }
}

export function* watchSignIn(getState) {
  while(true) {
    yield take(actions.SIGN_IN_REQUEST);
    /*
      ***THIS IS A BLOCKING CALL***
      It means that signIn will ignore any SIGN_IN_REQUEST event until
      the current signIn completes, either by success or by Error.
      i.e. concurrent SIGN_IN_REQUEST are not allowed
      TODO: This needs to be enforced by the UI (disable signIn button)
    */
    yield call(signIn, getState);
  }
}