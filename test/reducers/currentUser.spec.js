import expect from 'expect';
import deepFreeze from 'deep-freeze';
import currentUser from '../../reducers/currentUser';
import {
  USER_LOAD,
  USER_SIGN_IN_REQUEST,
  USER_UNLOAD,
} from '../../constants/actionTypes';

describe('currentUser reducer', () => {
  it('should handle initial state', () => {
    const oldState = undefined;
    const action = {
      type: undefined,
    };
    deepFreeze(action);
    const newState = {
      username: undefined,
      requestingSignIn: false,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
  it('should handle user load', () => {
    const oldState = {
      username: undefined,
      requestingSignIn: true,
    };
    const action = {
      type: USER_LOAD,
      username: 'username',
    };
    deepFreeze(oldState);
    deepFreeze(action);
    const newState = {
      username: 'username',
      requestingSignIn: false,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
  it('should handle user unload', () => {
    const oldState = {
      username: 'username',
      requestingSignIn: false,
    };
    const action = {
      type: USER_UNLOAD,
    };
    deepFreeze(oldState);
    deepFreeze(action);
    const newState = {
      username: undefined,
      requestingSignIn: false,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
  it('should handle user sign in request', () => {
    const oldState = {
      username: undefined,
      requestingSignIn: false,
    };
    const action = {
      type: USER_SIGN_IN_REQUEST,
    };
    deepFreeze(oldState);
    deepFreeze(action);
    const newState = {
      username: undefined,
      requestingSignIn: true,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
});
