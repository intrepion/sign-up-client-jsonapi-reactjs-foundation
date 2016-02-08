import expect from 'expect';
import deepFreeze from 'deep-freeze';
import currentUser from '../../reducers/currentUser';
import * as actions from '../../actions';

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
      type: actions.USER_LOAD,
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
      type: actions.USER_UNLOAD,
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
      type: actions.SIGN_IN_REQUEST,
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
