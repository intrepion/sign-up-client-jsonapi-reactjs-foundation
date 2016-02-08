import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {
  take,
  put,
  call,
} from 'redux-saga';
import {
  signIn,
} from '../../sagas';
import {
  api
} from '../../services';
import * as actions from '../../actions';

const username = 'username';
const password = 'username';
const requestingSignIn = false;
const state = { username, password, requestingSignIn };
const getState = () => state;

console.log(username);

describe('index saga', () => {
  it('should handle sign in', () => {
    const generator = signIn(getState);
    expect(
      generator.next().value
    ).toEqual(call(api.signIn, username, password));
    expect(
      generator.next().value
    ).toEqual(put(actions.signInSuccess(username)));
  });
});
